// javascript for index.html page using JSON (index.json)
// Credit: Activity #15 Expanded JSON code
$(document).ready(function(){
    $.getJSON("scripts/index.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#index").append("<img src='"+value.image +"'></img>");
                $("#index").append("<h2>"+value.description+"</h2>");
            });
        });
    });
});