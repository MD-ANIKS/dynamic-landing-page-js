// DOM Element
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// options
const showAmPm = true;

// showTime function
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // 12hr format
  hour = hour % 12 || 12;

  // set Am or Pm
  const amPm = hour < 12 ? "PM" : "AM";

  // run this time
  time.innerHTML = `${hour}<span>:</span>${showZero(
    min
  )}<span>:</span>${showZero(sec)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// show zeros
function showZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// add background and greeting
function bgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    greeting.textContent = "Good Morning";
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
  } else {
    // Night
    greeting.textContent = "Good Night";
    document.body.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.425),rgba(0, 0, 0, 0.404)),url('./images/night.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
  }
}

// get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// set Name
function setName(e) {
  if (e.type === "keypress") {
    // when enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // when enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// run
showTime();
bgGreet();
getName();
getFocus();
