import { Button, Flex, Stack } from '@chakra-ui/react';
import React from 'react';

import { FR } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';

import AppContext from '../../context/AppContext';

function Topbar() {

    const {
        language,
        changeLanguage
    } = React.useContext(AppContext);

    const handleLanguageSwitch = (e) => {
        let value = e.currentTarget.value;
        changeLanguage(value);
    };

    return (
        <Flex direction={'row'} justify={'end'} w={'100%'} p={2} height={'80px'}>
            <Stack spacing={2} direction={'row'} justify={'center'} align={'center'}>
                <Button 
                    aria-selected={language === 'french'}
                    _selected={{
                        backgroundColor: 'gray.200'
                    }} 
                    value={'french'} onClick={handleLanguageSwitch}>
                    <FR height={'60%'}/>
                </Button>
                <Button
                    aria-selected={language === 'english'}
                    _selected={{
                        backgroundColor: 'gray.200'
                    }}  value={'english'} onClick={handleLanguageSwitch}>
                    <US height={'60%'}/>
                </Button>
            </Stack>
        </Flex>
    );
}

export default Topbar;