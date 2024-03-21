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
                    stageText: action.payload.text,
                    parentStage: action.payload.parentStage,
                    display:'flex'
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
        default:
            return state
    }
}

export default function MapContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        tooltip: {
            x:0,
            y:0,
            display:'none',
            stageText: '',
            parentStage: '',
        },
    })

    return (
        <MapContext.Provider value={{...state, dispatch}}>
            {children}
        </MapContext.Provider>
    )
}