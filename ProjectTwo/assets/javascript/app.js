$(document).ready(function(){
    $('#meats').click(function(){
        alert("Hi");
        $.get( "/api/examples", function( data ) {
            $( "#dataDump" ).html( data );
            console.log(data);
          });
    });
});

$(document).ready(fuction() {
    $(#'fish').click(function() {
        $.get('/api/examples', function(data) {
            $('#dataDump').html(data);
            console.log(data);
        });
    });
});

$(document).ready(fuction() {
    $(#'veggies').click(function() {
        $.get('/api/examples', function(data) {
            $('#dataDump').html(data);
            console.log(data);
        });
    });
});

$(document).ready(fuction() {
    $(#'dairy').click(function() {
        $.get('/api/examples', function(data) {
            $('#dataDump').html(data);
            console.log(data);
        });
    });
});
