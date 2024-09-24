async function search() {
    console.log(inputValue.value);


    if(inputValue.value){
       const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
       console.log(response);
       
       response.json().then((data)=>{
        console.log(data);

        const name=data.name
        console.log(name);
        
        const des=data.weather[0].main
        console.log(des);
        
        
        const humidity=data.main.humidity
        console.log(humidity);
        const cname=data.sys.country
        console.log(cname);
        const wind=data.wind.speed
        console.log(wind);
        const pressure=data.main.pressure
        console.log(pressure);
        

        const date=new Date()
        console.log(date);
        
        const time=date.getTime()
        console.log(time);
        const hour= date.getHours()
        console.log(hour);
        const min=date.getMinutes()
        console.log(min);
       
        
        const temperature=Math.floor(data.main.temp-273.15)
        console.log(temperature);
        const feels=Math.floor(data.main.feels_like-273.15)
        console.log(feels);
        
        if(data.weather[0].main=='Mist'){
            weatherInfo.style.backgroundImage= "url('https://static.vecteezy.com/system/resources/thumbnails/008/854/797/small_2x/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png')"
            }
            else if(data.weather[0].main=='Clouds'){
              weatherInfo.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/010/989/785/small_2x/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png')"
            }
            else if(data.weather[0].main=='Clear') {
                weatherInfo.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png')"
            }
            else if(data.weather[0].main=='Rain') {
                weatherInfo.style.backgroundImage="url('https://www.transparentpng.com/download/weather-report/cloud-rain-water-lightning-nature-images-19.png')"
            }



         result.innerHTML=` <div class="text-center mt-5">
            <h1 >${name}</h1>
           </div>
           <div class="d-flex justify-content-center">
            
              <h1 class="mt-5"  >${temperature}℃ <span class="fs-5">,${des}</span></h1>
           </div>
           <div>
            <h6>Feels like ${feels}℃</h6>
           </div>
           </div>`

           page.innerHTML=`<div class="d-flex justify-content-center">
            <h1 class="time">${hour}:${min}  ${hour>12?'PM':'AM'}</h1>
            </div>
            <div id="">
              <h1></h1>
              <h5 class=" date ms-5 ">${date}</h5>
            </div>`

        details.innerHTML=`<ul class="list-group list-group-flush">
            <li class="list-group-item" >Country : ${cname}</li>
            <li class="list-group-item">Humidity : ${humidity}</li>
            <li class="list-group-item" >Wind : ${wind}</li>
            <li class="list-group-item" >Pressure : ${pressure}</li>
          </ul>`

         
        
       })
       
    }
    else{
        alert('Please enter your city name')
    }

    
    
}
function getTime(){
    setTimeout(() => {
        getTime()
    }, 1000);

}






