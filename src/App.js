import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react'
import Board from './components/Board/Board';
import Translate from './components/Translation/Translate';

import { AppProvider } from './context/AppContext';

import theme from './themes';

function App() {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Board />
      </ChakraProvider>
    </AppProvider>
  );

};

export default App;