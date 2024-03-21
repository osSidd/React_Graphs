import Curve from "./curve"
import useMap from '../../hooks/useMap'
import { debounce } from "../../utils/functions"

export default function TextBox({x,y,boxFill, text, noOfCurves=2, curveYEnd=250, width=180}){

    const {dispatch} = useMap()

    const curveArray = Array.from(Array(noOfCurves).keys())
    const height = 40
    const baseHeight = 200
    const innerCurveFactor = curveYEnd >= 250 ? 8 : 2
    const delay = 250
    const stages = text.split('.')
    const stageText = stages[stages.length-1]
    const parentStage = Array.isArray(stages) ? stages.join(' > ') : ''

    const mouseOver = debounce((e) => {
        const x = e.pageX > 1000 ? 1000 : e.pageX
        const y = e.pageX > 1000 ? e.pageY - 200 : e.pageY - 150
        dispatch({
            type:'SET_TOOLTIP',
            payload: {
                x,
                y,
                text:stageText,
                parentStage,
            }
        })
    },delay)

    function mouseOut(){
        dispatch({type: 'UNSET_TOOLTIP'})
    }

    return(
        <g>
            <g onMouseOver={(e) => mouseOver(e)} onMouseOut={debounce(mouseOut, delay)}>
                <rect
                    fill={boxFill}
                    x={x}
                    y={y+baseHeight}
                    rx={5}
                    ry={5}
                    width={width}
                    height={height}
                />
                <text
                    fill="white"
                    stroke="none"
                    fontSize={16}
                    fontWeight={600}
                    x={x+15}
                    y={y+ baseHeight +25}
                >{stageText}</text>
            </g>
            {
                curveArray.map((curve, index, arr) => {
                    let sign = Math.pow(-1, curve)
                    return (
                    <g key={curve}>
                        {
                        arr.length % 2 !== 0 ? (
                        
                            parseInt(arr.length/2) === curve ? 
                            <Curve
                                curveType="l"
                                xStart={x+width}
                                yStart={y+baseHeight+(Math.floor(height/2))}
                                xEnd={75}
                                yEnd={0}
                            /> :
                            <Curve
                                curveType="c"
                                xStart={x+width}
                                yStart={y+baseHeight+(Math.floor(height/2))}
                                x1={`${curve >= 2 ? 50 : 75}`}
                                xEnd={75}
                                yEnd={`${curve >= 2 ? (sign > 0 ? curveYEnd : -curveYEnd) : (sign > 0 ? (parseInt(curveYEnd/2)) : -(parseInt(curveYEnd/2)))}`}
                            />
                        )
                            :
                            <Curve
                                curveType="c"
                                xStart={x+width}
                                yStart={y+baseHeight+(Math.floor(height/2))}
                                x1={`${curve >= 2 ? 50 : 75}`}
                                xEnd={75}
                                yEnd={`${curve >= 2 ? (sign > 0 ? curveYEnd : -curveYEnd) : (sign > 0 ? (curveYEnd/innerCurveFactor) : -(curveYEnd/innerCurveFactor))}`}
                            />
                        }
                    </g>
                )})
            }
        </g>
    )
}