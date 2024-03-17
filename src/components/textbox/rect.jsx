export default function Rect({fill, x, y}){
    return (
        <rect
            fill={fill}
            stroke='none'
            strokeWidth={2}
            x={x}
            y={y}
            width={100}
            height={30}
        ></rect>
    )
}