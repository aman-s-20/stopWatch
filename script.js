let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  stopWatch();
  hr=0;
  min=0;
  sec=0;
  count=0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
  if (timer) {
    count++;
    if (count >= 100) {
      count = 0;
      sec++;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hr++;
    }

    let hrStr = hr;
    let minStr = min;
    let secStr = sec;
    let countStr = count;

    if (hr < 10) {
      hrStr = "0" + hr;
    }
    if (min < 10) {
      minStr = "0" + min;
    }
    if (sec < 10) {
      secStr = "0" + sec;
    }
    if (count < 10) {
      countStr = "0" + count;
    }
    document.getElementById("hr").innerHTML = hrStr;
    document.getElementById("min").innerHTML = minStr;
    document.getElementById("sec").innerHTML = secStr;
    document.getElementById("count").innerHTML = countStr;
    setTimeout("stopWatch()", 10);
  } else {
  }
}
