import React from 'react';

const AppContext = React.createContext({
    language : 'french',
    changeLanguage: (language)=> {}
});

export default AppContext;

export function AppProvider(props)
{
    const [language, setLanguage] = React.useState('french');

    const changeLanguage = (language) => {
        setLanguage(language);
    };

    return (
        <AppContext.Provider value={{
            language,
            changeLanguage
        }}>
        {props.children}
        </AppContext.Provider>
    );
};

