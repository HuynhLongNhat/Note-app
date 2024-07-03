import 'dotenv/config';
import express, { query } from "express"
import http from "http"
import { ApolloServer } from "@apollo/server"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import bodyParser from "body-parser"
import { expressMiddleware } from "@apollo/server/express4"
import cors from "cors"
import mongoose from "mongoose";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
const app = express()
const httpServer = http.createServer(app)




//connect to DB
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cnl5wm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT || 4000


const schema = makeExecutableSchema({ typeDefs });

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

app.use(cors(), bodyParser.json(), expressMiddleware(server))

mongoose.set('strictQuery', false);
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to DB');
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log('🚀 Server ready at http://localhost:4000');
  });