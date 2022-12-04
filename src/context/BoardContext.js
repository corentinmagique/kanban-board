import React from 'react';

const BoardContext = React.createContext({
    columns: [],
    addColumn: (column) => {}
});

export default BoardContext;

export function BoardProvider(props)
{
    const [ columns, setColumns ] = React.useState([]);

    const addColumn = (column) => {
        setColumns(oldArray => [...oldArray, column]);
        console.log(columns);
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

