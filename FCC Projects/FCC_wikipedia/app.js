var id; 
var searchInfo;


$("#submit").on("click", function () {
    searchInfo = $("#search_bar").val();
    getData("titles",searchInfo);
})


function logResults(data) {
    id = Object.keys(data.query.pages)[0];
    getPage("pageids", id);
}

function getData(searchClass, searchInfo) {
//    $.getJSON(`https://en.wikipedia.org/w/api.php? action=query&titles=${searchInfo}&prop=revisions&rvprop=content&format=json&callback=?`, function(data) {
//        console.log(data);
//    });
    $.ajax({
        url: `https://en.wikipedia.org/w/api.php? action=query&${searchClass}=${searchInfo}&prop=revisions&rvprop=content&format=json`,
        dataType: "jsonp",
        jsonpCallback: "logResults"
    });

    //    $.get(`https://www.mediawiki.org/w/api.php? action=query&titles=${searchInfo}&prop=revisions&rvprop=content&format=json`, function (object) {
    //        console.log(object.query.pages);
    //    });
}
function logResult(data) { 
    $("#text_append").html(`<p><a href="https://en.wikipedia.org/wiki/${searchInfo}" target=_blank>${searchInfo}</a>...<span>`+ data.query.pages[id].revisions[0]["*"].substring(400, 1000)+ "</span>...</p>");
    getCategory("titles", searchInfo);
    
    
}


function getPage(searchClass, searchInfo) { 
    $.ajax({
        url: `https://en.wikipedia.org/w/api.php? action=query&${searchClass}=${searchInfo}&prop=revisions&rvprop=content&format=json`,
        dataType: "jsonp",
        jsonpCallback: "logResult"
    });
}

$("#random").on("click", function() { 
    window.open("https://en.wikipedia.org/wiki/Special:Random");
})

function logCategory(data) {
    var array = data.query.pages[id].links;
    console.log(array);
    
    for (var i = 0; i < array.length; i++) {
    document.getElementById("extra_info").innerHTML += `<p class="related">RELATED: <a href="https://en.wikipedia.org/wiki/${array[i].title}" target=_blank>${array[i].title}</a></p>
    `
    }

}


function getCategory(searchClass, searchInfo) { 
    $.ajax({
        url: `https://en.wikipedia.org/w/api.php? action=query&${searchClass}=${searchInfo}&prop=links&format=json`,
        dataType: "jsonp",
        jsonpCallback: "logCategory"
    });
    $("#extra_info").html("");
}