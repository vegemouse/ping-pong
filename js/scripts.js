var pingpong = function(number) {
  var numberCount = 0;
  var numbersList = [];
  for (var i = 0; i < number; i++) {
    numberCount++;
    numbersList.push(numberCount);
  }
  return numbersList;
  numbersList = [];
}

// Front end
$(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var input = $("input").val();
    var result = pingpong(input);
    $("#output").empty();
    result.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>");
    })
  })
})
