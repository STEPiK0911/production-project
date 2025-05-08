import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from "@app/App";
import {ThemeProvider} from "@app/providers/ThemeProvider";          // или сразу объявить компонент ниже
import  "@shared/config/i18n/i18n"
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";

const rootEl = document.getElementById('root')
if (!rootEl) {
    throw new Error('No root element found')
}

const root = ReactDOM.createRoot(rootEl)

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
               <ThemeProvider>
                   <App/>
               </ThemeProvider>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>
)
