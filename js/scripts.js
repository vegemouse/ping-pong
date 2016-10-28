var pingPong = function(number) {
  if (number >= 0) {
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
  } else {
    alert("Please enter a positive number");
  }
}

// Front end
$(function() {
  $("input").keypress(function() {
    $(".btn").addClass("activated", 750);
  });
  $("#pingpong").submit(function(event){
    event.preventDefault();
    $("#output").addClass("glow", 750);
    var input = $("input").val();
    var results = pingPong(input);
    $("#output").empty();
    results.forEach(function(result) {
      if (result === "ping pong") {
        $("#output").prepend("<li class=\"pingPong\">" + result + "</li>");
      } else if (result === "pong") {
        $("#output").prepend("<li class=\"pong\">" + result + "</li>");
      } else if (result === "ping") {
        $("#output").prepend("<li class=\"ping\">" + result + "</li>");
      } else {
        $("#output").prepend("<li>" + result + "</li>");
      }
        $("#output li").fadeIn(1200);
    })
  })
})
