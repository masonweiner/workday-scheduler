$(document).ready(function () {
  //put all of our jquery inside this function
  //VARIABLE DECLARATIONS
  var currentTime = $("#currentDay");
  currentTime.text(moment().format("ddd MMM Do"));

  //FUNCTIONS

  //check time and determine whether it is past, present, or future
  function checkTime() {
    //get current hour
    var hour = moment().hours();
    console.log(hour);
    //loop through the block hours
    $(".time-block").each(function () {
      //block is the id of the current hour
      var block = parseInt($(this).attr("id").split("-")[1]);
      //compare current hour to block hour and assign it a styling class
      if (block < hour) {
        $(this).addClass("past");
      } else if (block === hour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  checkTime();

  //EVENT HANDLERS
  $(".saveBtn").on("click", function () {
    //capture info that the user entered and store it in local storage
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(time, value);
  });

  //display local storage items into their specific block
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
