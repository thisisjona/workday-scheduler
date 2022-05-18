$(document).ready(function() {
    var currentDate = moment().format('dddd, MMMM Do');
    var currentTime = moment().format('HH');
    var container = $('.container');
    var hoursArr = [];

    //display current date at header section
    $('#currentDay').append(currentDate);
    console.log(currentTime);

    // Dynamically Create Timeslot Elements
    for (let i = 0; i < 9 ; i++){
var row = $('<div class="row time-slot"></div>');
var hourCol = $('<div class= "col hour"></div>');

var taskCol = $('<div class= "col-6"></div>');
var inputField = $('<textarea class="form-control textarea"></textarea>');
var saveBtn = $('<button type= "button" class="btn col-md-10 saveBtn"></button>');
saveBtn.html('SAVE TASK')
// saveBtn.attr("id", i);

var saveCol = $('<div class="col"></div>');
saveCol.append(saveBtn);
taskCol.append(inputField);
hourCol.html('yooooo');

container.append(row);
row.append(hourCol, taskCol, saveCol);
};

});



