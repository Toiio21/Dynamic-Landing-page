// DOM
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show the Time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//Zeros in Time;

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Background and Greeting;

function bgGreeting() {
  let today = new Date();
  let hour = today.getHours();

  if(hour < 12) {
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = 'Доброе утро,';
  } else if(hour < 18) {
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = 'Добрый день,';
  } else {
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greeting.textContent = 'Добрый вечер,';
    document.body.style.color = 'white';
  }
}

//Get your Name;
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Введите имя]';
  } else {
    name.textContent = localStorage.getItem('name');
  }

}
//Set the name;
function setName(e) {
  if(e.type === 'keypress') {
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//Get Focus;
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Введите]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//Set the Focus;
function setFocus(e) {
  if(e.type === 'keypress') {
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run the Time
showTime();
bgGreeting();
getName();
getFocus();
