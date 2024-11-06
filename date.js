window.addEventListener('DOMContentLoaded',main)

function main() {
    setInterval(renderTime,1000);
}

function renderTime(){
    const date = new Date();
    
    month.textContent = getMonthName(date);
    time.textContent = getTime(date);
    weekDay.textContent = getWeekDay(date);
    week.textContent = getWeek(date);
}

function getMonthName(date) {
    switch (date.getMonth()) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March"; 
        case 3:
            return "April";
        case 4:
            return "May"
        case 5:
            return "June";
        case 6:
            return "July"
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return "Söndag";
        case 1:
            return "Måndag";
        case 2:
            return "Tisdag";
        case 3:
            return "Onsdag";
        case 4:
            return "Torsdag";
        case 5:
            return "Fredag";
        case 6:
            return "Lördag";
    }
}

function getTime(date) {
    const hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds < 10)
        seconds = "0" + seconds;
    if(minutes < 10)
        minutes = "0" + minutes;
    return hours + ":" + minutes + ":" + seconds;
}

function getWeek(date) {
    const 
    const week = date.getWeek();
}







