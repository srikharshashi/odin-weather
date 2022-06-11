const API_KEY="";
 function getPostUrl(lat,long){
    const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    return URL;
}
