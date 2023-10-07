import { createContext, useContext } from "react";



const GlobalContext = createContext();


export const Provider = ({children}) => {


    return (
            <GlobalContext.Provider value={{}}>

            </GlobalContext.Provider>
    )
}



export  default GlobalContext;
