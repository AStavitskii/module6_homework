
function numRow(a, b) {
    let start = a;
  
    let timerId = setInterval(function() {
      console.log(start);
      if (start == b) {
        clearInterval(timerId);
      }
      start=start+1;
    }, 1000);
  }
  
  
  numRow(5, 15);