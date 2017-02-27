//free code camp, quote generator; 
$(document).ready(function () {
    var randomInt = Math.floor(Math.random() * 4);
    $("#quote").html(`<p>${quotes[randomInt]}</p>`);
    $("#author").html(`<p>${authors[randomInt]}</p>`);
    $('body').css("background-color", `${colors[randomInt]}`);
    $('button').css("background-color", `${colors[randomInt]}`);
    $('.box').css("color", `${colors[randomInt]}`);
})

var colors = ['firebrick', '#2185C5', 'green', '#FF7F66']

var quotes = ["''Make your weird light shine bright so the other weirdos know where to find you", "''Having a soft heart in a cruel world is courage, not weekness", "''It's okay to be a glowstick. Sometimes we have to break before we shine", "''Don't waste words on people who deserve your silence. Sometimes the most powerful thing you can say is nothing at all"];

var authors = ["The idealist", "HPLYRIKZ.com", "Anonymous", "LifeQuotes"];

$("#new_quote").on("click", function () {
    var randomInt = Math.floor(Math.random() * 4);
    $("#quote").html(`<p>${quotes[randomInt]}</p>`);
    $("#author").html(`<p>${authors[randomInt]}</p>`);
    $('body').css("background-color", `${colors[randomInt]}`);
    $('button').css("background-color", `${colors[randomInt]}`);
    $('.box').css("color", `${colors[randomInt]}`);
});

$('#twitter').on("click", function() { 
    window.open("http://twitter.com/home?status=" + $("#quote").text() + " -" + $("#author").text());
})