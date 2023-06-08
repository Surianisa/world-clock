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