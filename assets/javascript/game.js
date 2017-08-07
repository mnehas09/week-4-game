$(document).ready(function() {

    var losses = 0;
    var wins = 0;
    var userTotal = 0;


    $("#red").on("click", function() {


        var random = Math.floor(Math.random() * 100) + 1;

        $("#random").html(random);
    });

    $("#blue").on("click", function() {


        var random = Math.floor(Math.random() * 100) + 1;

        $("#random").html(random);

    });


    $("#green").on("click", function() {


        var random = Math.floor(Math.random() * 100) + 1;

        $("#random").html(random);

    });

    $("#yellow").on("click", function() {


        var random = Math.floor(Math.random() * 100) + 1;

        $("#random").html(random);

    });





});