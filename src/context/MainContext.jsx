import { createContext, useEffect, useState } from "react";
import { dummyOrders } from "../contains";



const GlobalContext = createContext();


export const Provider = ({children}) => {
    const [orders, setOrders] = useState([]);
    const [confirmedOrdersID, setConfirmedOrdersID] = useState([])
    const [completedOrdersID, setCompletedOrdersID] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState({})
    useEffect(() => {
        setOrders(dummyOrders);
    },[])

    const sendData = (id) => {
        setConfirmedOrdersID([...confirmedOrdersID,id]);
    }

    const completeData = (id) => {
        setCompletedOrdersID([...completedOrdersID,id]);
    }

    const sendDetailID = (id) => {
        orders.map((order) =>  {
            if (order.id === id) {
                setSelectedOrder(order)
            }
        })
        
    }

    return (
            <GlobalContext.Provider value={{sendData,confirmedOrdersID,orders,completeData,completedOrdersID,sendDetailID,selectedOrder}}>
                {children}
            </GlobalContext.Provider>
    )
}



export  default GlobalContext;
