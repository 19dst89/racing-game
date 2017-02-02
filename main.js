console.log("Javascript link is working");

$(document).ready(function() {
  gBoard = [["<div id='1top' class='top col-md-2'>TOP 1</div>",
    "<div id='2top' class='top starting col-md-2'>TOP 2</div>",
    "<div id='3top' class='top starting col-md-2'>TOP 3</div>",
    "<div id='4top' class='top starting col-md-2'>TOP 4</div>",
    "<div id='5top' class='top starting col-md-2'>TOP 5</div>",
    "<div id='6top' class='top starting col-md-2'>TOP 6</div>"],
    ["<div id='1bottom' class='bottom starting col-md-2'>Bottom 1</div>",
    "<div id='2bottom' class='bottom starting col-md-2'>Bottom 2</div>",
    "<div id='3bottom' class='bottom starting col-md-2'>Bottom 3</div>",
    "<div id='4bottom' class='bottom starting col-md-2'>Bottom 4</div>",
    "<div id='5bottom' class='bottom starting col-md-2'>Bottom 5</div>",
    "<div id='6bottom' class='bottom starting col-md-2'>Bottom 6</div>"]];


    for (var i = 0; i < gBoard.length; i++) {
      for (var j = 0; j < gBoard[i].length; j++) {
        $('#board').append(gBoard[i][j]);
      }
    };

    // var clickCounter = 1;
    // $("button#player1").click(function() {
    //   $("#" + clickCounter + "top").css("background-color", "blue");
    //   clickCounter++
    //   var revertColor = clickCounter - 1;
    //   if (revertColor > 1) {
    //     $("#" + revertColor + "top").css("background-color", "red");
    //   };
    // });

    var clickCounter = 1;
    var clickCounter2 = 1;
    $(document).keyup(function(event) {
      if(event.which == 65) {
        $("#" + clickCounter + "top").addClass("end-slot").removeClass("starting");
        clickCounter++
      }
      else if (event.which == 76) {
        $("#" + clickCounter2 + "bottom").addClass("end-slot").removeClass("starting");
        clickCounter2++
      }
    })


    // not sure why this isnt working.
    if ($("#6top").hasClass("end-slot")) {
      alert("Player 1 has won");
    }
    else if ($("#6bottom").hasClass("end-slot")) {
      alert("Player 2 has won");
    }


    // $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );




    // var clickCounter2 = 1;
    // $(document).keyup(function(event) {
    //   if (event.which == 76) {
    //     $("#" + clickCounter2 + "bottom").css("background-color", "blue");
    //   }
    //   clickCounter2++
    // });



    // $("button#player2").click(function() {
    //   $(".bottom").css("background-color", "green");
    // });








    // gBoard.forEach( function(el) {
    //   el.forEach( function(column, idx) {

    //   })
    // })



})