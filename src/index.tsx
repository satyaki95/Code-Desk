import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DarkModeProvider from './DarkModeContext/DarkModeContext'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkModeProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DarkModeProvider>
);

