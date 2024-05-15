import { Component } from "react"
import {Box, Typography} from '@mui/material'

class Pollution extends Component{

    constructor(){
        super()
    }

    componentDidMount(){
        this.fetchCurrentData()
    }

    async fetchCurrentData(){
        const lat = 51.5085
        const lon = -0.1257
        const start = 1606488670
        const end = 1606747870

        const current = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=en`
        
        const forecast = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        
        const historical = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`

        try{
            const res = await fetch(historical,{mode:'cors'})

            if(res.ok){
                const data = await res.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return (
            <Box>
                <Typography>Pollution</Typography>
            </Box>
        )
    }
}

export default Pollution