import './tooltip.css'
import useMap from '../../hooks/useMap'
export default function Tooltip(){

    const {tooltip} = useMap()

    const style={
        top: tooltip.y,
        left: tooltip.x,
        display: tooltip.display,
    }

    return(
        <div id="tooltip" style={style}>
            tooltip
        </div>
    )
}