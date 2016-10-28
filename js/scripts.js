var pingpong = function(number) {
  var numberCount = 0;
  var numbersList = [];
  for (var i = 0; i < number; i++) {
    numberCount++;
    numbersList.push(numberCount);
  }

  for (var i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 15 === 0) {
      numbersList[i] = "PING-PONG";
    } else if (numbersList[i] % 5 === 0) {
      numbersList[i] = "PONG";
    } else if (numbersList[i] % 3 === 0) {
      numbersList[i] = "PING";
    }
  }
  return numbersList;
}

// Front end
$(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var input = $("input").val();
    var results = pingpong(input);
    $("#output").empty();
    results.forEach(function(result) {
      $("#output").append("<li>" + result + "</li>");
    })
  })
})
