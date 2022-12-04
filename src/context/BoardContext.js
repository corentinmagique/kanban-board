import React from 'react';

const BoardContext = React.createContext({
    columns: [],
    addColumn: (column) => {}
});

export default BoardContext;

export function BoardProvider(props)
{
    const [ columns, setColumns ] = React.useState([]);

    const addColumn = (columns) => {
        setColumns(columns);
    };

    return (
        <BoardContext.Provider value={{
            columns,
            addColumn
        }}>
            {props.children}
        </BoardContext.Provider>
    );
};

