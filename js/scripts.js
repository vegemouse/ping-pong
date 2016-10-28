$(function() {
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var input = $("input").val();
    console.log(input);
    var result = pingpong(input);
    $("#output").
  })
})
