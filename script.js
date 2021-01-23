// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$("#currentDay").text(new Date());

//create a variable that can hold the current hour and current hour
//should be equal to the value of timeblocks
var currentHour = new Date().getHours();
console.log(currentHour);

var dayHours = $("textarea");
console.log(dayHours);

for (var i = 0; i < dayHours.length; i++) {
  var timeBlockHour = parseInt($(dayHours[i]).attr("class"));

  if (currentHour === timeBlockHour) {
    $(dayHours[i]).addClass("present");
  } else if (currentHour > timeBlockHour) {
    $(dayHours[i]).addClass("past");
  } else {
    $(dayHours[i]).addClass("future");
  }
}
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

//if local storage is equal to null set a local storage with a new key name and an empty array
if (localStorage.getItem("timeBlocks") === null) {
  localStorage.setItem("timeBlocks", JSON.stringify([]));
}
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
$("body").on("click", function (event) {
  event.preventDefault();
  var elements = event.target;
  if (elements.matches("button") === true) {
    var events = elements.previousElementSibling.value;
    var storageEvents = JSON.parse(localStorage.getItem("timeBlocks"));
    storageEvents.push(events);
    localStorage.setItem("timeBlocks", JSON.stringify(storageEvents));
    renderEvents();
  }
});

function renderEvents() {
  var storageEvents = JSON.parse(localStorage.getItem("timeBlocks"));
  for (var i = 0; i < storageEvents.length; i++) {
    console.log(storageEvents[i]);
    $("#" + i).text(storageEvents[i]);
  }
}

renderEvents();
