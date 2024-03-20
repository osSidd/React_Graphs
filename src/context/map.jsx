import {createContext, useReducer} from 'react'

export const MapContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_TOOLTIP':
            return {
                ...state,
                tooltip:{
                    x: action.payload.x,
                    y: action.payload.y,
                    display:'block'
                }
            }
        case 'UNSET_TOOLTIP':
            return {
                ...state,
                tooltip: {
                    ...state.tooltip,
                    display:'none'
                }
            }
        case 'SET_STAGE':
            return {
                ...state,
                stage: {
                    text: action.payload
                }
            }
        default:
            return state
    }
}

export default function MapContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        tooltip: {
            x:0,
            y:0,
            display:'block',
        },
        stage:{
            text: ''
        }
    })

    return (
        <MapContext.Provider value={{...state, dispatch}}>
            {children}
        </MapContext.Provider>
    )
}