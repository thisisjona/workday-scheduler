$(document).ready(function() {
   //items are not saving to localStorage. Revisit. 
   
   
    var currentDate = moment().format('dddd, MMMM Do');
    var currentTime = moment().format('HH');
    var container = $('.container');
    // Add array for addEvent on the scheduler
    var addEvent = ["", "", "", "", "", "", "", ""];

    //display current date at header section
    $('#currentDay').append(currentDate);
    console.log(currentTime);

  //    Set up local.storage and save per event added to scheduler
  if (localStorage.getItem("addEvent")) {
    addEvent = JSON.parse(localStorage.getItem("addEvent"));
  }
  function save(event) {
    var id = event.target.id;
    var text = $("#" + id + "textarea").val();
    addEvent[id] = text;
    localStorage.setItem("addEvent", JSON.stringify(addEvent));
  }

    //main loop
    for (let i = 0; i < 9 ; i++){

//set AM vs PM times
function setMeridian(hour) {
    if(hour > 12){
        var timeText =  hour -12;
        return timeText + 'pm';
    }else {
        return hour + 'am';
    }
};
//Change text input field color according to past present or future
var color
if(currentTime === i + 9) {
    color = 'present';
}else if(currentTime < i + 9) {
    color = 'future';
}else {
    color = 'past';
};

// Dynamically Create Timeslot Elements
var row = $('<div class="row time-slot"></div>');
var hourCol = $('<div class= "col hour"></div>');
hourCol.text(setMeridian(i + 9));

var taskCol = $('<div class= "col-6"></div>');
var inputField = $('<textarea class="form-control textarea"></textarea>');
inputField.attr('id', i + 'inputField');
inputField.val(addEvent[i]);
inputField.addClass(color);


var saveBtn = $('<button type= "button" class="btn col-md-10 saveBtn"></button>');
saveBtn.attr('id', i)
saveBtn.html('SAVE TASK')
// saveBtn.attr("id", i);

var saveCol = $('<div class="col"></div>');
saveCol.append(saveBtn);
taskCol.append(inputField);


container.append(row);
row.append(hourCol, taskCol, saveCol);
};



});



