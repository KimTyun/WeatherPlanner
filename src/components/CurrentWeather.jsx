import './css/CurrentWeather.css'
function CurrentWeather() {
   return (
      <div className="currentCard">
         <div>
            <h3>서울</h3>
            <p>few clouds</p>
         </div>
         <div>
            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt={`${'few clouds'} icon`} />
            <p>{25}°C</p>
         </div>
      </div>
   )
}

export default CurrentWeather
