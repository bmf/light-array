function message() {

  var elMsg = document.getElementById('message');
  console.log(elMsg.textContent);
  if (elMsg.textContent === '' || elMsg.textContent === undefined) {
    elMsg.textContent = 'You have clicked LED 1';
  } else {
    elMsg.textContent = '';
  }
}

var elLed1 = document.getElementById('led_1');
elLed1.onclick = message;
