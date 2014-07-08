function message() {
  console.log("In message()");
  var elMsg = document.getElementById('message');

  if (elMsg.textContent === '') {
    elMsg.textContent = 'You have clicked a link';
  } else {
    elMsg.textContent = '';
  }
}

var elWatch = document.getElementById('watch');
elWatch.onclick = message;

