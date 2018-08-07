importScripts('lib.js');

onmessage = function(e) {
  // Can close with close()
  if (isNaN(e.data[0]) || isNaN(e.data[1])) {
    console.log('Terminate worker from worker!');
    close();
  } else {
    postMessage({
      message: 'Result: ',
      result: sum(e.data[0], e.data[1]) // calling function from imported script
    });
  }
}

onerror = function(e) {
  console.log('error from worker: ', error);
}
