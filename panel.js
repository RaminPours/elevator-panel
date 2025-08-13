const floorDisplay = document.getElementById('floor');
const rightDisplay = document.getElementById('down');
const leftDisplay = document.getElementById('up');

const buttons = document.querySelectorAll('.btns');

const openBtn = document.querySelector('.btn.open');
const closeBtn = document.querySelector('.btn.close');
const alarmBtn = document.querySelector('.btn.alarm');

let currentFloor = '-';

// Verdiepingsknoppen
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedFloor = button.textContent;
    button.style.backgroundColor = "green";

    const current = parseInt(currentFloor);
    const select = parseInt(selectedFloor);

    rightDisplay.textContent = "";
    leftDisplay.textContent = "";

    if (select > current) {
      leftDisplay.textContent = '↑';
    } else if (select < current) {
      rightDisplay.textContent = '↓';
    }

    showTemporaryMessage("moving...", "red", button, select, current);
    floorDisplay.style.color = "lime";
  });
});

// Liftbeweging met tijd en knop-reset
function showTemporaryMessage(message, color, clickedButton, select, current) {
  const difference = Math.abs(select - current);
  const duration = difference * 5000;
  const lastFloor = currentFloor;

  floorDisplay.textContent = message;
  floorDisplay.style.color = color;

  setTimeout(() => {
    floorDisplay.textContent = lastFloor;
    floorDisplay.style.color = "lime";
    rightDisplay.textContent = "";
    leftDisplay.textContent = "";
    currentFloor = select;
    floorDisplay.textContent = currentFloor;
    clickedButton.style.backgroundColor = ""; 
  }, duration);
}

// Kort bericht voor open/sluit/alarm
function showSimpleMessage(message, color) {
  floorDisplay.textContent = message;
  floorDisplay.style.color = color;

  setTimeout(() => {
    floorDisplay.textContent = currentFloor;
    floorDisplay.style.color = "lime";
  }, 3000);
}

// Deur openen
openBtn.addEventListener('click', () => {
  openBtn.style.backgroundColor = "green";
  showSimpleMessage("DOOR OPEN", "green");
  rightDisplay.textContent = "";
  leftDisplay.textContent = "";
  setTimeout(() => {
    openBtn.style.backgroundColor = "";
  }, 3000);
});


// Deur sluiten
closeBtn.addEventListener('click', () => {
  closeBtn.style.backgroundColor = "green";
  showSimpleMessage("CLOSED", "green");
  rightDisplay.textContent = "";
  leftDisplay.textContent = "";
  setTimeout(() => {
    closeBtn.style.backgroundColor = "";
  }, 3000);
});

// Alarm
alarmBtn.addEventListener('click', () => {
  alarmBtn.style.backgroundColor = "green";
  showSimpleMessage("alarm", "green");
  rightDisplay.textContent = "";
  leftDisplay.textContent = "";
  setTimeout(() => {
    alarmBtn.style.backgroundColor = "";
  }, 3000);
});