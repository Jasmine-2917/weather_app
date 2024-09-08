import SearchBox from './SearchBox.jsx' 
import InfoBox from './InfoBox.jsx'
import { useState } from 'react'
import './weather.css'


export default function Weather(){

    const [weatherInfo , setWeatherInfo]= useState(
        {
        city : "Delhi",
        weather : "overcast clouds",
        feelsLike : 26.05,
        humidity : 100,
        temp : 26.05,
        tempMax : 26.05,
        tempMin : 26.05
    }
    )


    // let isCold = weatherInfo.temp<15
    let isHot = weatherInfo.temp>15
    let isRainy = weatherInfo.humidity>80

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo)
    }

    return(
    <div className='weather-container' style={{backgroundImage: isRainy ? `url("https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` : isHot ? `url("https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` : `url("https://images.unsplash.com/photo-1457270508644-1e4905fabd7e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
        <h1 style={{color:"white"}}>Weather App by <i>Jasmine</i></h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}