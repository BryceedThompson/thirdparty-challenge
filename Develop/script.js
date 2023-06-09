

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
var timeBlock = $(".time-block");
timeBlock.children().children("i").on("click" , (event)=>{
  var save = $(event.target);
  var notes = save.parent().parent().children("textarea").val();
  var time = save.parent().parent().prop("id");
  localStorage.setItem(time,notes);
  console.log(save);
console.log(notes);
console.log(time);
});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function applyTime(){
    var currentTime = dayjs().format("H");
    for (var i = 7; i < 18; i ++){
      var timeId = "#hour-"+i;
      if(currentTime == i){
        $(timeId).removeClass("past future");
        $(timeId).addClass("present");
      }
      else if(currentTime > i){
        $(timeId).removeClass("present past");
        $(timeId).addClass("future");
      } else{
        $(timeId).removeClass("future present");
        $(timeId).addClass("past");
      }
    }
  }
  applyTime();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (var i = 7; i < 18; i ++){
    var timeId = "#hour-"+i;
    var saveId = "hour-"+i;
    $(timeId).children("textarea").text(localStorage.getItem(saveId));
  }


  // TODO: Add code to display the current date in the header of the page.
  var currentDay = $('#currentDay');
  currentDay.text(dayjs().format('dddd, MMMM DD[th]'));// ask about current day formating 
});
