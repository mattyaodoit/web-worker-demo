var third = document.querySelector('#number3');
var result2 = document.querySelector('.result2');

if (!!window.SharedWorker) { // Check if Browser supports the Worker api.
  // adding shared worker
  var sharedWorker = new SharedWorker('./sharedWorker.js');

  // onkeyup could be used instead of onchange if you wanted to update the answer every time
  // an entered value is changed, and you don't want to have to unfocus the field to update its .value

  third.onchange = function() {
    sharedWorker.port.postMessage([third.value, third.value]); // Sending message as an array to the worker
    console.log('Message posted to shared worker');
  };

  sharedWorker.port.onmessage = function(e) {
    result2.textContent = `${e.data.message}${e.data.result}`;
    console.log('Message received from worker');
  };
}
