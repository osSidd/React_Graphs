import {createContext, useReducer} from 'react'

export const DimensionContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default function DimensionContextProvider({children}){

    const {state, dispatch} = useReducer(reducer, {
        vert: 250,
    })

    return (
        <DimensionContext.Provider value={{...state, dispatch}}>
            {children}
        </DimensionContext.Provider>
    )
}