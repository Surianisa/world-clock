function updateTime() {

    // Jakarta
    let jakartaElement = document.querySelector("#jakarta");
    let jakartaDateElement = jakartaElement.querySelector(".date");
    let jakartaTimeElement = jakartaElement.querySelector(".time");
    let jakartaTime = moment().tz("Asia/Jakarta");

    jakartaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    jakartaTimeElement.innerHTML = jakartaTime.format("h:mm:ss [<small>]A[</small>]");

    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

    // Amsterdam
    let amsterdamElement = document.querySelector("#amsterdam");
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = moment().format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format("h:mm:ss [<small>]A[</small>]");

    // Lima
    let limaElement = document.querySelector("#lima");
    let limaDateElement = limaElement.querySelector(".date");
    let limaTimeElement = limaElement.querySelector(".time");
    let limaTime = moment().tz("America/Lima");

    limaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
let intervalID=0;
function updateCity(event) {
  
clearInterval(intervalID);
  intervalID = setInterval(() => {
    let cityTimeZone = event.target.value; 
      if (cityTimeZone === 'current') {
          cityTimeZone = moment.tz.guess();
      }

    let cityName = cityTimeZone.replace('_', " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="cities">
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    </div>`
        },1000);  
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);