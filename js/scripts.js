var pingPong = function(number) {

  var numberCount = 0;
  var numbersList = [];
  if (number >= 0) {
    // Checks if number is too large
    if (number > 300) {
      var largeNumConfirm = confirm("Entering a number greater than 300 may cause the page to become unresponsive. Are you sure you want to enter " + number + "?");
    }

    if (largeNumConfirm === true || number <= 300) {
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
    }
  } else {
    alert("Please enter a positive number less than 300.");
  }
  return numbersList;
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
