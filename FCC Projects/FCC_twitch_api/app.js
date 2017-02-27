var choice;
var twitchUser;
var stream;



$('#submit').on("click", function () {
    if ($("#inputBox").val() === "") {
        choice = $("#selectBox").find(":selected").val();
        console.log(choice);
    } else { 
        choice = $("#inputBox").val();
        console.log(choice);
    }

    $.get(`https://wind-bow.gomix.me/twitch-api/channels/${choice}`, function (object, success) {
        twitchUser = object;
        console.log(success);
        if (object.status == null) {
            object.status = " No status to show ";
            $("#name").text(object.display_name);
            $("#information").html(
                `<img src=${object.logo} id="logo" class="img-responsive"> 
            <p class=''>${object.status}</p>
            `
            );
            $("#information").prepend(
                `<a href=${object.url} class='text-center'>My Twitch Channel</a>
                <hr>
            `
            );
        } else if (object.status == "404") {
            alert("You have chosen a page that no longer exits! Please make sure you spelled the page right and try again!");

        } else {
            $("#name").text(object.display_name);
            $("#information").html(
                `<img src=${object.logo} id="logo" class="img-responsive"> 
            <p class=''>Current status: ${object.status}</p>
            `
            );
            $("#information").prepend(
                `<a href=${object.url} class='text-center'>My Twitch Channel</a> 
                <hr>
            `
            );
        }


    });

    $.get(`https://wind-bow.gomix.me/twitch-api/streams/${choice}`, function (anotherObject) {
        stream = anotherObject;
        if (stream.stream == null) {
            $("#information").append("Currently not streaming; check on me again soon!")
        }
    })
});



//stream button here