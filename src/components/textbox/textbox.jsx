import Curve from "./curve"

export default function TextBox({x,y,boxFill, text, noOfCurves=2}){
    const curveArray = Array.from(Array(noOfCurves).keys())
    const width = 180
    const height = 50
    return(
        <g>
            <rect
                fill={boxFill}
                x={x}
                y={y}
                width={width}
                height={height}
            />
            <text
                fill="white"
                stroke="none"
                fontSize={16}
                fontWeight={600}
                x={x+30}
                y={y+35}
            >{text}</text>
            {
                curveArray.map((curve, index, arr) => {
                    let sign = Math.pow(-1, curve)
                    console.log(arr.length%2)
                    return (
                    <g key={curve}>
                        {
                        arr.length % 2 !== 0 ? (
                        
                            parseInt(arr.length/2) === curve ? 
                            <Curve
                                curveType="l"
                                xStart={x+width}
                                yStart={y+(Math.floor(height/2))}
                                xEnd={75}
                                yEnd={0}
                            /> :
                            <Curve
                                curveType="c"
                                xStart={x+width}
                                yStart={y+(Math.floor(height/2))}
                                x1={`${curve >= 2 ? 50 : 75}`}
                                xEnd={75}
                                yEnd={`${curve >= 2 ? (sign > 0 ? 200 : -200) : (sign > 0 ? 100 : -100)}`}
                            />
                        )
                            :
                            <Curve
                                curveType="c"
                                xStart={x+width}
                                yStart={y+(Math.floor(height/2))}
                                x1={`${curve >= 2 ? 50 : 75}`}
                                xEnd={75}
                                yEnd={`${curve >= 2 ? (sign > 0 ? 200 : -200) : (sign > 0 ? 100 : -100)}`}
                            />
                        }
                    </g>
                )})
            }
        </g>
    )
}