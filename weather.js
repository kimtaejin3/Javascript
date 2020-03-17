const weather=document.querySelector(".js-weather");
const API_Keys="88dbb3093bddfad83d87b45c3889f333";
const COORDS='coords';

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Keys}&units=metric`
    ).then(function(response){//데이터 기다려야 함.
        return response.json();
    })
    .then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`당신이 있는 곳의 온도는 ${temperature}도, 당신이 있는 곳은 ${place} 아니면 그 근처`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        //latitude:latitude;
        latitude,
        longitude
    }; 
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}


function handleGeoError(position){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords()
{
    const loadCoords=localStorage.getItem(COORDS);
    if(loadCoords===null){
        askForCoords();
    }else{
        const parsedCoords=JSON.parse(loadCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();