import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider.tsx";          // или сразу объявить компонент ниже

const rootEl = document.getElementById('root')
if (!rootEl) {
    throw new Error('No root element found')
}

const root = ReactDOM.createRoot(rootEl)

root.render(
    <React.StrictMode>
        <BrowserRouter>
           <ThemeProvider>
               <App/>
           </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
