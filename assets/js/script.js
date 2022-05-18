$(document).ready(function() {
    var currentDate = moment().format('dddd, MMMM Do');

    $('#currentDay').append(currentDate);
});