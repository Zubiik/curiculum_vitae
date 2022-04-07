import React from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import HomePage from './HomePage/Index';
import { theme } from './theme';
import './helpers/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
