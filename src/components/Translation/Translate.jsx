import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';

import { languages } from '../../languages/languages';

const translate = (text) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { language } = useContext(AppContext);

    if(Object.keys(languages).includes(language)) {
        return languages[language][text] || text;
    }

    return text;
};

function Translate({children}) {
    return translate(children);
}

export default Translate;