import { createContext, useEffect, useState } from "react";
import { dummyOrders } from "../contains";



const GlobalContext = createContext();


export const Provider = ({children}) => {
    const [orders, setOrders] = useState([]);
    const [confirmedOrdersID, setConfirmedOrdersID] = useState([])

    useEffect(() => {
        setOrders(dummyOrders);
    },[])

    const sendData = (id) => {
        setConfirmedOrdersID([...confirmedOrdersID,id]);
    }

    return (
            <GlobalContext.Provider value={{sendData,confirmedOrdersID,orders,completeData}}>
                {children}
            </GlobalContext.Provider>
    )
}



export  default GlobalContext;
