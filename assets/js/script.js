$(document).ready(function() {
    var currentDate = moment().format('dddd, MMMM Do');
    var currentTime = moment().format('HH');
    var container = $('.container');
    var hoursArr = [];

    //display current date at header section
    $('#currentDay').append(currentDate);
    console.log(currentTime);

    //main loop
    for (let i = 0; i < 9 ; i++){
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

var taskCol = $('<div class= "col-6"></div>');
var inputField = $('<textarea class="form-control textarea"></textarea>');
inputField.addClass(color);
var saveBtn = $('<button type= "button" class="btn col-md-10 saveBtn"></button>');
saveBtn.html('SAVE TASK')
// saveBtn.attr("id", i);

var saveCol = $('<div class="col"></div>');
saveCol.append(saveBtn);
taskCol.append(inputField);
hourCol.text(setMeridian(i + 9));

container.append(row);
row.append(hourCol, taskCol, saveCol);
};

//set AM vs PM times
function setMeridian(hour) {
    if(hour > 12){
        var timeText =  hour -12;
        return timeText + 'pm';
    }else {
        return hour + 'am';
    }
};

});



