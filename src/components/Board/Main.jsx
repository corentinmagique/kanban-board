import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Translate from '../Translation/Translate';

function Main() {
  return (
    <Box h={'calc( 100% - 80px )'} w={'100%'} p={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={'2xl'} fontWeight={'medium'} fontStyle={'italic'}><Translate>no_column</Translate></Text>
    </Box>
  );
}

export default Main;