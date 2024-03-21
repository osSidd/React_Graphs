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
            {tooltip.stageText==='Project'? <></> : <small><span style={{fontWeight:600}}>stage</span>: {tooltip.parentStage}</small>}
            <p id='stage-text'>{tooltip.stageText}</p>
            {tooltip.stageText==='Project'? <></> :<p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                {/* Officia cupiditate sunt repellendus facilis provident, voluptate itaque, vel dolorum placeat illum, ipsam sint inventore earum? Sint ea eveniet laudantium eius quidem. */}
            </p>}
        </div>
    )
}