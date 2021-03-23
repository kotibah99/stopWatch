var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;


var startTimer = function() {
    s1 = setInterval(function(){
        s1 = ( s1 > 1000 ) ? 1 : ( s1 + 1 ) ;
        setTimeToHTML(hours, minutes, seconds);
    },1);

            sec = setInterval(function() {
                seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
            },1000);
    min = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hour = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);
    document.getElementById("start").disabled = true;
}

var stopTimer = function() {
    clearInterval(sec); 
    clearInterval(min); 
    clearInterval(hour);
    document.getElementById("start").disabled = false;
}

var resetTimer = function() {
    stopTimer();
    hours = 0 ;
     minutes = 0 ; 
     seconds = 0 ;
    setTimeToHTML(hours, minutes, seconds);
    document.getElementById("laps").innerHTML = "";
    document.getElementById("start").disabled = false;
}

var setTimeToHTML = function(hours, minutes, seconds) {
    document.getElementById("hours").innerText = (hours.toString().length == 1) ? ("0" + hours) : hours ;
    document.getElementById("minutes").innerText = (minutes.toString().length == 1) ? ("0" + minutes) : minutes ;
    document.getElementById("seconds").innerText = (seconds.toString().length == 1) ? ("0" + seconds) : seconds ;
    
}

var setLaps = function() {
    var p = document.createElement("p") ;
    var timer = document.getElementById("hours").innerText + " : " + document.getElementById("minutes").innerText + " : " + document.getElementById("seconds").innerText ;
    var text = document.createTextNode(timer);
    p.appendChild(text);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
}