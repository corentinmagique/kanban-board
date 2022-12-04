import React from 'react';

import { Box, Text, Card, CardHeader, CardBody } from '@chakra-ui/react';
import Translate from '../Translation/Translate';

function Column({props}) {

    return (
        <Box h={'100%'} w={'500px'} p={2}>
            <Card backgroundColor={'white'} h={'100%'} w={'100%'}>
                <CardHeader>
                    <Text><Translate>{props.title}</Translate></Text>
                </CardHeader>
            </Card>
        </Box>
        
    );
}

export default Column