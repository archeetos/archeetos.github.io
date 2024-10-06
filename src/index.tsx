import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

const rootElement = document.getElementById('root');

// TypeScript will require you to handle cases where `getElementById` might return null
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
}

// Optional performance measurement
reportWebVitals();
