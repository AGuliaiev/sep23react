import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [trigger, setTrigger] = useState(null)

    const chengTrigger = () => {
        setTrigger(prev=>!prev)
    }
    return (
        <Context.Provider value={{trigger, chengTrigger}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};