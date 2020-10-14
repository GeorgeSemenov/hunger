$(document).ready(function(){
  function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 5000);
  }
}