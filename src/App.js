import React from 'react';
import Main from './Main';
import './App.css';

import { ThemeProvider } from '@rmwc/theme';

import '@material/theme/dist/mdc.theme.css';

function App() {
  return (
    <ThemeProvider
      options={{
        primary: '#FF6600',
        secondary: 'white',
        onPrimary: 'white',
        textPrimaryOnBackground: 'black'
      }}
    >
      <Main/>
    </ThemeProvider>
  );
}

export default App;
