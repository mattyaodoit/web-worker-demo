var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

if (!!window.SharedWorker) { // Check if Browser supports the Worker api.
  // adding shared worker
  var sharedWorker = new SharedWorker('./sharedWorker.js');

  // onkeyup could be used instead of onchange if you wanted to update the answer every time
  // an entered value is changed, and you don't want to have to unfocus the field to update its .value

  first.onchange = function() {
    sharedWorker.port.postMessage([first.value,second.value]); // Sending message as an array to the worker
    console.log('Message posted to shared worker');
  };

  second.onchange = function() {
    sharedWorker.port.postMessage([first.value,second.value]);
    console.log('Message posted to shared worker');
  };

  sharedWorker.port.onmessage = function(e) {
    result.textContent = `${e.data.message}${e.data.result}`;
    console.log('Message received from worker');

    if (e.data.result > 10) {
      console.log('Terminate worker from app!');
      sharedWorker.terminate();
      result.textContent = 'Warning: Worker is terminated from app.';
    }
  };
}
