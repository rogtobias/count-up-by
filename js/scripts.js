$(document).ready(function() {
  $("#userNumbers").submit(function(event) {

    var countTo = $("input#countTo").val();
    var countBy = $("input#countBy").val();

    var countTo = parseInt(countTo);
    var countBy = parseInt(countBy);

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Numbers only & no empty fields.");
    } else if ( countTo < 0 || countBy < 0) {
      alert("Both fields need to be greater than 0.")
    } else if (countTo < countBy) {
      alert("You're counting by a number greater than you're counting to.")
    } else {
      var numberList = [];
      debugger;
      var countNum = 0;
      for (var i = 0; i < (countTo / countBy); i++) {
        countNum += countBy;
        numberList.push(countNum);
      }
      $("#countList").text(numberList);
    }

    event.preventDefault();
  });
});
