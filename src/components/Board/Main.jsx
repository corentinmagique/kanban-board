import { Box, Card, CardHeader, Flex, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Translate from '../Translation/Translate';

import BoardContext , { BoardProvider } from '../../context/BoardContext';
import { getLocalStorage, saveLocalStorage } from '../../utils';
import Column from './Column';

function Main() {

    const [columns, setColumns] = React.useState([
        
    ]);

    const handleColumnAdd = () => {
        let newColumn = {
            title: 'column_title',
            pos: 0,
            lines: []
        }

        setColumns(oldArray => [...oldArray, newColumn]);
    };

    if(columns.length === 0)
    {
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

    return (
        <BoardProvider>
            <Box h={'calc( 100% - 80px )'} 
                w={'100%'} 
                p={4} display={'flex'} 
                justifyContent={'start'} 
                alignItems={'center'} 
                overflowX={'hidden'}
                overflowY={'hidden'}
                whiteSpace={'nowrap'}
            >
                {
                    columns.map((element, index)=>(
                        <Column props={element} key={index}/>
                    ))
                    
                }

                <Link fontSize={'xl'} onClick={handleColumnAdd}><Translate>click_to_add</Translate></Link>
            </Box>
        </BoardProvider>
    );
}

export default Main;