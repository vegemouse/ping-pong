var numberCount = 0;
var numbersList = [];
var pingPong = function(number) {
  // Checks if number is positive
  if (number >= 0) {
    // Checks if number is too large
    if (number > 250) {
      var largeNumConfirm = confirm("Entering a number greater than 250 may cause the page to become unresponsive. Are you sure you want to enter " + number + "?");
    }
    if (largeNumConfirm === true || number <= 250) {
      // Replaces numbers
      for (var i = 0; i <= number; i++) {
        if (i % 15 === 0) {
          numbersList[i] = "ping pong";
        } else if (i % 5 === 0) {
          numbersList[i] = "pong";
        } else if (i % 3 === 0) {
          numbersList[i] = "ping";
        } else {
          numbersList[i] = i;
        }
      }
    }
  } else {
    alert("Please enter a positive number less than 250.");
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
    numbersList = [];
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
