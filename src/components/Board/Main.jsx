import { Box, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Translate from '../Translation/Translate';

import BoardContext , { BoardProvider } from '../../context/BoardContext';

function Main() {

    const {
        columns,
        addColumn
    } = React.useContext(BoardContext);

    const handleColumnAdd = () => {
        addColumn(1);
        console.log(columns);
    };

    return (
        <BoardProvider>
            <Box h={'calc( 100% - 80px )'} w={'100%'} p={4} display={'flex'} justifyContent={'center'} alignItems={'center'}
            
            >
                <Stack alignItems={'center'}>
                    <Text fontSize={'2xl'} fontWeight={'medium'} fontStyle={'italic'}><Translate>no_column</Translate></Text>
                    <Link fontSize={'xl'} onClick={handleColumnAdd}><Translate>click_to_add</Translate></Link>
                </Stack>
            </Box>
        </BoardProvider>
    );
}

export default Main;