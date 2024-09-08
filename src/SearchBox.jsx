import './SearchBox.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city, setCity]=useState("")
  let [error, setError] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY

  let getWeatherInfo = async() =>{
   try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
   let jsonResponse = await response.json()
   let result = {
    city : city,
    temp : jsonResponse.main.temp,
    tempMin : jsonResponse.main.temp_min,
    tempMax : jsonResponse.main.temp_max,
    humidity : jsonResponse.main.humidity,
    feelsLike : jsonResponse.main.feels_like,
    weather : jsonResponse.weather[0].description
   };
   console.log(result)
   return result
   }catch(err){
    throw err;
   }
  }

  let handleChange=(event)=>{
    setCity(event.target.value)
  }

  let handleSubmit=async(event)=>{
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    }catch(err){
      setError(true);
    }
  }

  return (
    <div className='searchBox'>
    <form onSubmit={handleSubmit}>
    <TextField className='search-bar' onChange={handleChange} id="city" label="City Name" variant="filled" value={city} required/><br /><br />
    <Button variant="contained" type='submit'>Search</Button>
    </form>
    {error && <div className='alert'><Alert severity="error">Place Not Found in Data.</Alert></div>}
    </div>
      )

}
