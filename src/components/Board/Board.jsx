import { Flex } from '@chakra-ui/react'
import React from 'react'
import Main from './Main';
import Topbar from './Topbar';

function Board() {
    return (
        <Flex h={'100%'} w={'100%'} direction={'column'} backgroundColor={'gray.100'}>
            <Topbar />
            <Main />
        </Flex>
    );
}

export default Board