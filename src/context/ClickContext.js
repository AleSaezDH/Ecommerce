import React, { useContext, useState } from 'react';

export const ClickContext = React.createContext();

export const useClickContext = () => useContext(ClickContext);

export default function ClickProvider ({children, defaultClickValue}) {
    const [clicker, setClicker] = useState(defaultClickValue);
    const [talle, setTalle] = useState(defaultClickValue);

    function adding (clickState) {
        if (clickState === true) {
            setClicker(true);
        }
    }

    return <ClickContext.Provider value={{clicker, setClicker, adding, setTalle}}>
            {children}
        </ClickContext.Provider>
}