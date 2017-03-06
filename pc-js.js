var array = [];
var clock = 10;
var time = 25;
var brk = 5;
var running = "no";

function audio() {
  new Audio("http:\/\/res.cloudinary.com\/ivanrwd\/video\/upload\/v1488562952\/Alarm-tone_skrqxf.mp3").play();
     return stop();
}


function myTimer() {
 if(clock > 0) {
   clock-=1;
   var minutes = Math.floor(clock/60);
   var seconds = clock%60;
   if(seconds === 0) {
     seconds = "00";
   }
   if(seconds  < 10 && seconds != 0) {
     seconds = "0" + seconds;
   }
   document.getElementById("info").innerHTML = "Work";
   console.log(clock);
   return document.getElementById("clock").value = minutes + ":" + seconds;
 }
  else {
    new Audio("http:\/\/res.cloudinary.com\/ivanrwd\/video\/upload\/v1488562952\/Alarm-tone_skrqxf.mp3").play();
     stop();
    if(brk > 0){
      clock = brk*60;
      brk = 0;
      document.getElementById("break").value = 0;
      document.getElementById("info").innerHTML = "Break";
    }
    else {
      clearInterval(run);
      document.getElementById("info").innerHTML = "Done!";
    }
  }
}

function setTime() {
  clock = time;
  return document.getElementById("clock").value = time;
}


function addTime() {
  var add = (document.getElementById("time").value*1) +1;
  time = add;
  return document.getElementById("time").value = add;
}

function addBreak() {
  var add = (document.getElementById("break").value*1) +1;
  brk = add;
  return document.getElementById("break").value = add;
}

function subTime() {
  if(time > 0) {
  var sub = (document.getElementById("time").value*1)-1;
  time = sub;
  return document.getElementById("time").value = sub;
  }
  else {
    
  }
}

function subBreak() {
   if(brk > 0) {
  var sub = (document.getElementById("break").value*1)-1;
  brk = sub;
  return document.getElementById("break").value = sub;
   }
  else {
    
  }
}


function setTimer() {
  time = document.getElementById("time").value*1;
  clock = time*60;
  if(running != "yes") {
  running = "yes";
  var run = setInterval(myTimer, 1000)
  return run;
  }
}
