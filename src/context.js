import React, { useContext,useReducer } from "react";


const AppContext = React.createContext()

const initialValue=null

const reducer=(state,action)=>{
    if(action.type==="LoggedIn"){
        return action.payload
    }


    return state
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialValue);
   

    return <AppContext.Provider value={{state ,dispatch}}>{children} </AppContext.Provider>

}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}


export {AppProvider}