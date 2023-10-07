import { createContext, useState } from "react";



const GlobalContext = createContext();


export const Provider = ({children}) => {
    const [empty, setEmptyOrders] = useState([])

    const sendData = (id) => {
        setEmptyOrders([...empty,id]);
    }

    return (
            <GlobalContext.Provider value={{sendData,empty}}>
                {children}
            </GlobalContext.Provider>
    )
}



export  default GlobalContext;
