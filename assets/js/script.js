$(document).ready(function() {
    var currentDate = moment().format('dddd, MMMM Do');
    var currentTime = moment().format('HH');
    var container = $('.container');

    //display current date at header section
    $('#currentDay').append(currentDate);
    console.log(currentTime);

    // Create Timeslot elements

var row = $('<div class="row time-slot"></div>');
var hourCol = $('<div class= "col hour"></div>');

var column2 = $('<div class= "col-6"></div>');
var inputField = $('<textarea class="form-control textarea"></textarea>');
var saveBtn = $('<button type= "button" class="btn col-md-10 saveBtn"></button>');
// saveBtn.attr("id", i);

var column3 = $('<div class="col"></div>');
column3.append(saveBtn);

container.append(row);

row.append(hourCol, column2, column3);
});

