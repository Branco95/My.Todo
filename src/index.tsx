import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main';
import Header from './components/Header';
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider>
      <header>
        <Header />
      </header>
      <main>
        <App />
      </main>
    </ThemeProvider>
  </React.StrictMode>
);
