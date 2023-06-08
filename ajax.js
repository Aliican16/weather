let citiesArray = new Array();


let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
let key = 'dac8fde88fd338d483e78f794530a6aa';


//document.querySelector("#araBtn").addEventListener("click", async(e)=>{



var city = document.getElementById("sehir");

document.querySelector("#language").addEventListener("change", () => {

    document.querySelector(".container").innerHTML = "";
    citiesArray.pop();
})



document.querySelector("#sehirAdı").addEventListener("submit", async (e) => {


    e.preventDefault();
    let d = document.querySelector("#language").value;
    if (d == 1) {

        lang = "tr";
    }

    if (d == 2) {
        lang = "en";

    }

    if (d == 3) {
        lang = "fr"
    }

    let httpRequestUrl = `${baseUrl}?q=${city.value}&appid=${key}&units=metric&lang=${lang}`;
    try {

        $.ajax({
            type: "GET",
            url: httpRequestUrl,
            dataType: 'json',
            success: function (cityData) { 
                const {
                    name,
                    main
                } = cityData;
                
                //name.value=!"undefined";
                //if(name==undefined){
                //  alert("Böyle Bi ŞEHİR BULUNMAMAKTADIR.!!")
                //  e.target.reset();
                //  return;
                //}


                if (citiesArray.includes(name)) {
                    alert(name + " adındaki şehir verisi zaten var!");
                    e.target.reset();
                    return;
                }

                // let filteredArray = citiesArray.filter(city => city == name);
                // if (filteredArray.length == 1) return;
                citiesArray.push(name);
                console.table(citiesArray)


                let iconUrl = `http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`;

                if (d == 1) {
                    let innerHtml = `<div class="content">
        <div id="arz">Şehir Adı: ${name}</div>
        <div id="temp">Hissedilen Sıcaklık:${Math.round(main.temp)}C°</div><br>
        <div id="havaDurumu">Hava Durumu:${cityData.weather[0].description}</div>
      <img src="${iconUrl}"></div>`;
                    document.querySelector(".container").innerHTML += innerHtml;

                }
                if (d == 2) {
                    let innerHtml = `<div class="content">
        <div id="arz">City Name: ${name}</div>
        <div id="temp"> Felt Temperature:${Math.round(main.temp)}C°</div><br>
        <div id="havaDurumu">Weather:${cityData.weather[0].description}</div>
      <img src="${iconUrl}"></div>`;
                    document.querySelector(".container").innerHTML += innerHtml;

                }
                if (d == 3) {
                    let innerHtml = `<div class="content">
        <div id="arz">Nom de la Ville: ${name}</div>
        <div id="temp"> TEMPÉRATURE Sentimentali:${Math.round(main.temp)}C°</div><br>
        <div id="havaDurumu">Meteo:${cityData.weather[0].description}</div>
      <img src="${iconUrl}"></div>`;
                    document.querySelector(".container").innerHTML += innerHtml;

                }


                //city.value="";
                //document.querySelectorAll("input").forEach((input)=>{
                //  input.value = "";
                //});
                //form.reset
                e.target.reset();
                //document.querySelector("#sehirAdı").reset();
            }
        });
    }
    catch (error) {
        alert("Böyle Bi ŞEHİR BULUNMAMAKTADIR.!!" + " " + error)
        e.target.reset();
    }

});



