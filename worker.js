var i = 0;
// starts from index 0 
function timedCount() {
  i = i + 1;
  postMessage(i);
  //Gives the speed of the count
  setTimeout("timedCount()", 500);
}

timedCount();