const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
// const dateToday = document.getElementById("dateToday")

function displayTime(){
    const date = new Date();

    hrs.textContent = date.getHours();
    min.textContent = date.getMinutes();
    sec.textContent = date.getSeconds();
    // dateToday.textContent = String(date.getFullYear()) + '/' + String(date.getMonth()) + '/' + String(date.getDate());
}

setInterval(displayTime, 1000);