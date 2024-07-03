import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Firebase/config.jsx"
import { RouterProvider } from "react-router-dom";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Router from './Router/index.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: "50" }}>
      <RouterProvider router={Router} />
    </Container>
  </React.StrictMode>,
)
