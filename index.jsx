// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi = "pleasant-flamingo-11.clerk.accounts.dev"; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider frontendApi={clerkFrontendApi}>
    <App />
  </ClerkProvider>
);
