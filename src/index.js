import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./ui/components/Authentication/Auth";
import { StoreProvider } from "./store/Store"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
