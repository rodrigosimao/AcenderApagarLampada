const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const change = document.querySelector('#change');
const lamp = document.querySelector('#lamp');

function changeTurnOn() {
  lamp.src = './img/ligada.png';
  turnOn.classList.add('turnOnBtn');
  turnOff.classList.remove('turnOffBtn');
}

function changeTurnOff() {
  lamp.src = './img/desligada.png';
  turnOff.classList.add('turnOffBtn');
  turnOn.classList.remove('turnOnBtn');
}

function lampBroken() {
  lamp.src = './img/quebrada.png';
  turnOn.classList.add('turnOnBtn');
  turnOff.classList.add('turnOffBtn');
  change.classList.remove('changeBtn');
}

function changeLamp() {
  lamp.src = './img/desligada.png';
  change.classList.add('changeBtn');
  turnOn.classList.remove('turnOnBtn');
}

turnOn.addEventListener('click', changeTurnOn);
turnOff.addEventListener('click', changeTurnOff);
lamp.addEventListener('dblclick', lampBroken);
change.addEventListener('click', changeLamp);
