// business logic

// rolling the dice
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
};
// player one
var player1RollCount = 0;
var player1Scores = 0;
var player1TotalScore = 0;
var p1Pigs = [];


function player1Roll(){
    player1RollCount = player1RollCount + 1;
    player1Scores = rollDice();
    p1Pigs.push(player1Scores);

    $("#player1Score").text(player1Scores);
    $("#player1RollScore").text(player1RollCount);
    $("#p1Hold").show(350);
    $("#p2Hold").hide(350);
    $("#p2Roll").hide(350);

};


function p1HoldDice(){

    // generate total score
//var total = 0;    

p1Pigs.forEach(function(pig){
    return player1TotalScore += pig;
});
    $("#player1Roll").hide();
    $("#player1TotalScore").text(player1TotalScore);


    //pass dice to player2

    $("#p1Hold").hide(350);
    $("#p2Hold").hide(350);
    $("#p2Roll").show(350);
    $("#p1Roll").hide(350);





 };



// player two
var player2RollCount = 0;
var player2Scores = 0;
var player2TotalScore = 0;
var p2Pigs = [];
function player2Roll(){
    player2RollCount = player2RollCount + 1;
    player2Scores = rollDice();
    p2Pigs.push(player2Scores);

    $("#player2Score").text(player2Scores);
    $("#player2RollScore").text(player2RollCount);
    $("#p2Hold").show(350);
    $("#p1Hold").hide(350);
    $("#p1Roll").hide(350);


};

function p2HoldDice(){

    // generate total score
//var total = 0;    

p2Pigs.forEach(function(pig){
    return player2TotalScore += pig;
});
    $("#player2Roll").hide();
    $("#player2TotalScore").text(player2TotalScore);


    //pass dice to player1
    $("#p2Hold").hide(350);
    $("#p1Hold").hide(350);
    $("#p1Roll").show(350);
    $("#p2Roll").hide(350);


 };








$(document).ready(function(){


    // player 1
    $("#p1Roll").click(function(){
        player1Roll();
    });

    $("#p1Hold").click(function(){
        p1HoldDice();
    });





    // player 2

    $("#p2Roll").click(function(){


        player2Roll();
    });

    $("#p2Hold").click(function(){
        p2HoldDice();
    });





});