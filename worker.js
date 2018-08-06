onmessage = function(e) {
  // Can close with close()
  if (isNaN(e.data[0]) || isNaN(e.data[1])) {
    console.log('Terminate worker from worker!');
    close();
  } else {
    postMessage({
      message: 'Result: ',
      result: parseFloat(e.data[0]) + parseFloat(e.data[1])
    });
  }
}

onerror = function(e) {
  console.log('error from worker: ', error);
}