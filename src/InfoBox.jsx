import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    let RAIN_URL = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL = "https://images.unsplash.com/photo-1443632826930-7e5bc4aa7fa0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URL = "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return(
        <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} />
        <CardContent>
        <Typography style={{display:'flex',justifyContent:"center"}} gutterBottom variant="h5" component="div">
          <span>{info.city}</span>&nbsp;{info.humidity > 80 ? <span><ThunderstormIcon/></span> : info.temp > 15 ? <span><WbSunnyIcon/></span> : <span><AcUnitIcon/></span>}
          {/* &nbsp;&nbsp;<span>{info.humidity > 80 ? Rain_Icon : info.temp > 15 ? Hot_Icon : Cold_Icon}</span> */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    )
   
}