export default function Curve({xStart, yStart, x1, xEnd, yEnd, curveType='c'}){
    return curveType === 'c' ?
    (
        <path
            fill="none"
            stroke="#777"
            strokeWidth={5}
            d={`M${xStart} ${yStart} c${x1} ${0} ${xEnd-50} ${yEnd} ${xEnd} ${yEnd}`}
        >
        </path>
    ) : 
    (
        <path
            fill="none"
            stroke="#777"
            strokeWidth={5}
            d={`M${xStart} ${yStart} l${xEnd} ${yEnd}`}
        ></path>
    )
}