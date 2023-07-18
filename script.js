function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }  

    document.getElementById("AM-PM").textContent = h + ":" + m + ":" + s + " " + session;
    document.getElementById("hour24").textContent = date.getHours() + ":" + m + ":" + s;

    const months = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"];

    const daysTr = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const daysEng = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const daysRus = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    var yr = date.getFullYear();
    var mn = date.getMonth() + 1;
    var dy = date.getDate();
    var dyName = daysTr[date.getDay() - 1] + " - " + daysEng[date.getDay() - 1] + " - " + daysRus[date.getDay() - 1];

    document.getElementById("fullDate").textContent = dy + "." + mn + "." + yr;
    document.getElementById("dayName").textContent = dyName;

    var currentDay = document.querySelector( '#' + months[mn - 1] + " span:nth-child(" + dy + ')' );
    currentDay.style.border = "solid 2px red"
    
    setTimeout(showTime, 1000);
}

showTime();