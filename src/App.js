import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react'
import Translate from './components/Translation/Translate';

import { AppProvider } from './context/AppContext';

const theme = extendTheme({
  components: {

  }
});

function App() {

  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <h1><Translate>welcome</Translate></h1>
      </ChakraProvider>
    </AppProvider>
  );
  
};

export default App;