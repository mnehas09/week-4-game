$(document).ready(function() {

    var losses = 0;
    var wins = 0;
    var redCrystal = Math.floor(Math.random()*12)+1;
    var blueCrystal = Math.floor(Math.random()*12)+1;
    var greenCrystal = Math.floor(Math.random()*12)+1;
    var yellowCrystal = Math.floor(Math.random()*12)+1;
    var randomNumber = Math.floor(Math.random()*100)+1;
    var totalScore = 0;



    $("#red").on("click", function() {
        totalScore += redCrystal;
        $("#random").html(randomNumber);
        $("#random2").html(redCrystal);
        $("#random2").html(totalScore);
    });


    $("#blue").on("click", function() {
        totalScore += blueCrystal;
        $("#random").html(randomNumber);
        $("#random2").html(blueCrystal);
        $("#random2").html(totalScore);
    });



    $("#yellow").on("click", function() {
        totalScore += yellowCrystal;
        $("#random").html(randomNumber);
        $("#random2").html(yellowCrystal);
        $("#random2").html(totalScore);
    });



    $("#green").on("click", function() {
        totalScore += greenCrystal;
        $("#random").html(randomNumber);
        $("#random2").html(greenCrystal);
        $("#random2").html(totalScore);
    });


  





});