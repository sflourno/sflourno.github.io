// javascript function for tips.html
// Credit: Activity 13 code
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "scripts/tips.json",
        beforeSend: function() {
            $("#tips").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#tips").html("");
            $.each(data,function() {
                $.each(this, function(key, value){
                $("#tips").append (
                "Category: " + value.category + "<br>" +
                "Description: " + value.description + "<br><br>"
                );
            });
        });
     }
    });
});
