function error() {
    console.log("error");
}


async function getWeatherData(lat, long) {
    console.log("c");
    const weather = await fetch(
        getPostUrl(lat, long),
    );
    let res = await weather.json();
    console.log(res);
    return res;
}

function getMainWeatherIcon(weather) {
    //determine the icon
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    const iconId = weather["weather"][0]["id"];


    //generate the required icon
    const icon = document.createElement("i");
    icon.classList.add("wi");

    let iconclass = "wi-owm-" + (isDayTime ? "day-" : "night-") + iconId;
    console.log(iconclass);
    icon.classList.add(iconclass);

    icon.classList.add("main-weather-icon");
    return icon;
}

function getMainCont(icon,weather) {
    //create all the conatiners and give them classes
    let con1 = document.createElement("div");
    con1.classList.add("con1")
    con1.classList.add("con")

    let con2 = document.createElement("div");
    con2.classList.add("con2")
    con2.classList.add("con")

    let maincon = document.createElement("div");
    maincon.classList.add("maincon")

    //make elements for cont2 and its data

    let locname=document.createElement("div");
    locname.textContent=weather["name"];
    con2.appendChild(locname);

    let tempdiv=document.createElement("div");
    tempdiv.textContent="Current : "+weather["main"]["temp"]+" "+"°C";
    con2.appendChild(tempdiv);

    let tempdiv1=document.createElement("div");
    tempdiv1.textContent="Minimum : "+weather["main"]["temp_min"]+" "+"°C";
    con2.appendChild(tempdiv1);

    let tempdiv2=document.createElement("div");
    tempdiv2.textContent="Maximum : "+ weather["main"]["temp_max"]+" "+"°C";
    con2.appendChild(tempdiv2);
    





    con1.appendChild(icon);
    maincon.appendChild(con1);
    maincon.appendChild(con2);

    return maincon;




}



navigator.geolocation.getCurrentPosition(async (pos) => {
    //Get The waether first
    let weather = await getWeatherData(pos.coords.latitude, pos.coords.longitude);

    //get the DOM elements we need to work with 
    const mainbody = document.querySelector(".mainbody");
    const cont1 = document.querySelector(".cont1");
    const loader = document.querySelector(".loader");

    //remove the loader once we get the data
    loader.classList.add("invisible");

    const icon = getMainWeatherIcon(weather);

    mainbody.replaceChild(getMainCont(icon,weather), cont1)










}, error, {
    enableHighAccuracy: true,
});
console.log("b");