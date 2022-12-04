import React from 'react';

const BoardContext = React.createContext({
});

export default BoardContext;

export function BoardProvider(props)
{
    return (
        <BoardContext.Provider value={{
        }}>
        {props.children}
        </BoardContext.Provider>
    );
};

