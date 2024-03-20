import {useContext} from 'react'
import {MapContext} from '../context/map'

export default function useMap(){
    const {tooltip, dispatch} = useContext(MapContext)
    return {tooltip, dispatch}
}