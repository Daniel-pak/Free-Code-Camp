var timer = 25;
var seconds = 0;
var start = false;
var firstFunction;
var secondFunction;


var firstBreakFunction;
var secondBreakFunction;
var breakMinutes = 0;
var breakSeconds = 0
var breaker = false;


$("#timer").text(timer + ":" + pad2(seconds));

$("#plus_minute").on("click", function () {
    timer++;
    seconds = 0;
    $("#timer").text(timer + ":" + pad2(seconds));
    clearInterval(firstFunction);
    clearInterval(secondFunction);
});

$("#minus_minute").on("click", function () {
    timer--;
    seconds = 0;
    $("#timer").text(timer + ":" + pad2(seconds));
    clearInterval(firstFunction);
    clearInterval(secondFunction);
});

$("#breaker").text(breakMinutes + ":" + pad2(breakSeconds));
$("#plus_break").on("click", function () {
    breakMinutes++;
    breakSeconds = 0;
    $("#breaker").text(breakMinutes + ":" + pad2(breakSeconds));
    clearInterval(firstBreakFunction);
    clearInterval(secondBreakFunction);
    clearInterval(firstBreakFunction);
    clearInterval(secondBreakFunction);
});

$("#minus_break").on("click", function () {
    if (breakMinutes > 0) {
        breakMinutes--;
        breakSeconds = 0;
        $("#breaker").text(breakMinutes + ":" + pad2(breakSeconds));
        clearInterval(firstBreakFunction);
        clearInterval(secondBreakFunction);
        clearInterval(firstBreakFunction);
        clearInterval(secondBreakFunction);

    }
});

function breakTiming() {
    $("#breaker").text(breakMinutes + ":" + pad2(breakSeconds));
}


function timing() {
    $("#timer").text(timer + ":" + pad2(seconds));
}

function bySecondBreaker() {
    if (breakSeconds == 0) {
        breakSeconds = 60;
        breakMinutes--;
        breakMinutes = breakMinutes;
    }
    breakSeconds--;
    breakSeconds = breakSeconds;
    if (breakMinutes === 0 && breakSeconds === 0) {
        breakSeconds = breakSeconds;
        $("#breaker").text(breakMinutes + ":" + pad2(breakSeconds));
        clearInterval(firstBreakFunction);
        clearInterval(secondBreakFunction);
        alert("Please reset clock!")
    }
}

var bySecond = function () {
    if (seconds == 0) {
        seconds = 60;
        timer--;
        timer = timer;
    }
    seconds--;
    seconds = seconds;
    if (timer === 0 && seconds === 0) {
        seconds = seconds;
        $("#timer").text(timer + ":" + pad2(seconds));
        clearInterval(firstFunction);
        clearInterval(secondFunction);
        start = false;
        breaker = true;
        breakers();
    }
}

function breakers() {
    if (breaker === true) {
        firstBreakFunction = setInterval(bySecondBreaker, 1000);
        secondBreakFunction = setInterval(breakTiming, 1000);
    } else if (breaker === false) {
        clearInterval(firstBreakFunction);
        clearInterval(secondBreakFunction);
    }
}


$("#start").on("click", function () {
    if (start == false) {
        firstFunction = setInterval(bySecond, 1000);
        secondFunction = setInterval(timing, 1000);
        start = true;
    } else if (start == true) {
        clearInterval(firstFunction);
        clearInterval(secondFunction);
        start = false;
    }
})


//break function 


function pad2(number) {
    return (number < 10 ? '0' : '') + number
}