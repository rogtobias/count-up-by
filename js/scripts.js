$(document).ready(function() {
  $("#userNumbers").submit(function(event){
    debugger;
    var countTo = $("input#countTo").val();
    var countBy = $("input#countBy").val();

    var countTo = parseInt(countTo);
    var countBy = parseInt(countBy);

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Numbers only & no empty fields.");
    } else if ( countTo < 0 || countBy < 0) {
      alert("Both fields need to be greater than 0.")
    } else {
      
    }

    event.preventDefault();
  });
});
