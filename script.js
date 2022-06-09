function getWeatherData() {

    navigator.geolocation.getCurrentPosition(async (pos)=> {
        const weather = await fetch(
            getPostUrl(pos.coords.latitude, pos.coords.longitude),
        );
        let res=await weather.json()
        console.log(res);
    })


    console.log("abc");
}

getWeatherData();