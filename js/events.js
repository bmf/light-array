function message() {
  console.log("In message()");
  var elMsg = document.getElementById('message');

  if (elMsg.textContent === '') {
    elMsg.textContent = 'You have clicked LED 1';
  } else {
    elMsg.textContent = '';
  }
}

var elLed1 = document.getElementById('led_1');
elLed1.onclick = message;
