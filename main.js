const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const redOn = () => {
  // console.log('Red On');
  red.style.backgroundColor = 'red';
}

const yellowOn = () => {
  // console.log('Yellow On');
  yellow.style.backgroundColor = 'yellow';
}

const greenOn = () => {
  // console.log('Green On');
  green.style.backgroundColor = 'green' ;
}

const redOff = () => {
  // console.log('Red Off');
  red.style.background = '#313131';
}

const yellowOff = () => {
  // console.log('Yellow Off');
  yellow.style.background = '#313131';
}

const greenOff = () => {
  // console.log('Green Off');
  green.style.background = '#313131';
}

let lights = () => {
  setTimeout(redOn, 0);
  setTimeout(redOff, 3000);
  setTimeout(yellowOn, 4000);
  setTimeout(yellowOff, 7000);
  setTimeout(greenOn, 8000);
  setTimeout(greenOff, 13500);
}

lights();
setInterval(lights, 13500);
