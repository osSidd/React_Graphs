import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

import {Box} from '@mui/material'

export default function Barchart({height, width}){
    
    const barRef = useRef()

    function makeChart(){

        //select the svg and add attributes
        const svg = d3.select(barRef.current)
        svg
            .attr('height', height)
            .attr('width', width)
            .style('background-color', 'bisque')

        //svg selects all children and removes them from dom
        svg.selectAll('*').remove()

        

    }

    function findDataType(arr){
        if(!arr.length) return 'empty'

        if(arr.every(item => typeof(item) === 'string')) return 'string'
        if(arr.every(item => typeof(item) === 'number')) return 'number'
    }

    useEffect(() => {
        makeChart()
    }, [height, width])

    return (
        <Box>
            <svg ref={barRef}></svg>
        </Box>        
    )   
}