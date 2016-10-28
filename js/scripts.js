var pingPong = function(number) {
  var numberCount = 0;
  var numbersList = [];
  for (var i = 0; i < number; i++) {
    numberCount++;
    numbersList.push(numberCount);
  }

  for (var i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 15 === 0) {
      numbersList[i] = "ping pong";
    } else if (numbersList[i] % 5 === 0) {
      numbersList[i] = "pong";
    } else if (numbersList[i] % 3 === 0) {
      numbersList[i] = "ping";
    }
  }
  return numbersList;
}

// Front end
$(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var input = $("input").val();
    var results = pingPong(input);
    $("#output").empty();
    results.forEach(function(result) {
      if (result === "ping pong") {
        $("#output").append("<li class=\"pingPong\">" + result + "</li>");
      } else if (result === "pong") {
        $("#output").append("<li class=\"pong\">" + result + "</li>");
      } else if (result === "ping") {
        $("#output").append("<li class=\"ping\">" + result + "</li>");
      } else {
        $("#output").append("<li>" + result + "</li>");
      }
    })
  })
})
