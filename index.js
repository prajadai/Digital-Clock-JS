const timeHMS = document.getElementById("timeHMS");
const dateToday = document.getElementById("date");

function displayTime(){
    const date = new Date();
    let ap;

    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();

    dateToday.textContent = `${month} / ${day} / ${year}`;

    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    if(hour>12){
        ap = 'PM';
    }
    else{
        ap = 'AM';
    }
    hour = hour < 12 ? hour : hour-12;
    
    timeHMS.textContent = `${hour} : ${min} : ${sec} ${ap}`;
}

setInterval(displayTime, 1000);