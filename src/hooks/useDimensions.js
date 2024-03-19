import {useContext} from 'react'
import {DimensionContext} from '../context/dimensions'

export default function useDimensions(){
    const {vert} = useContext(DimensionContext)

    return {vert}
}