$(document).ready(function(){
    $('#meats').click(function(){
        alert("Hi");
        $.get( "/api/examples", function( data ) {
            $( "#dataDump" ).html( data );
            console.log(data);
          });
    });
});

$(document).ready(function(){
    $('#fish').click(function(){
        alert("Hi");
        $.get( "/api/examples", function( data ) {
            $( "#dataDump" ).html( data );
            console.log(data);
          });
    });
});

$(document).ready(function(){
    $('#veggies').click(function(){
        alert("Hi");
        $.get( "/api/examples", function( data ) {
            $( "#dataDump" ).html( data );
            console.log(data);
          });
    });
});

$(document).ready(function(){
    $('#dairy').click(function(){
        alert("Hi");
        $.get( "/api/examples", function( data ) {
            $( "#dataDump" ).html( data );
            console.log(data);
          });
    });
});
