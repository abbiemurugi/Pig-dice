$(document).ready(function() {
    $("#rolled").click(function(event) {
    event.preventDefault();

    var player1 = new player1("player 1");
    var player2 = new player2("player 2")
    
    var currentTurn = new currentTurn(player1, player2)
    var total = currentTurn.total

    $("#player score").text(total);

    $('#player1score').text(player1score);
    $('#player2score').text(player2score);

    $("form#rollD").submit(function(event) {
        event.preventDefault();

        var result = currentTurn.diceRoller(player1, player2)

        $('#rollD').text(result);

        $('#Ts').text(currentTurn.total);

        if ((currentTurn.total + currentTurn.player.score) >= 100) {
            if (currentTurn.player == player1) {
                $('#player1RollScore').text(currentTurn.total + currentTurn.player.score);
                alert("You are the winner!");
            } else if (currentTurn.player == player2) {
                $('#player2RollScore').text(currentTurn.total + currentTurn.player.score)
                alert("You are the winner!");
            };
        };
    });
   });

    $("form#hold").submit(function(event) {
        event.preventDefault();

        currentTurn.endTurn(player1, player2);

        $('#current_player').text(currentTurn.player.userName);

        $('#player1score').text(player1score);
        $('#player2score').text(player2score);

        $('#roll').text(currentTurn.randNumber);
        $('#Ts').text(currentTurn.total);
    
    });
});

 function Turn(player) {
    this.total = 0;
    this.randNumber = 0;
    this.player = player;
};

Turn.prototype.diceRoller = function(player1, player2) {
    var randNumber = Math.floor(Math.random() * 6) + 1;
    this.total += randNumber;

    if (randNumber == 1) {
        this.total = 0;
        this.endTurn(player1, player2);

        return randNumber;
    } else {
        this.randNumber += randNumber;
        return randNumber;
    };
    };
    Turn.prototype.endTurn = function(player1, player2) {
        this.player.score += this.total;
        this.total = 0;
        this.randNumber = 0;
        if (this.player == player1) {
            this.player = player2; 
            $("#player2").toggleClass("active");
            $("#player1").toggleClass("active");
        } else if (this.player == player2) {
            this.player = player1;
            $("#player2").toggleClass("active");
            $("#player1").toggleClass("active");
        };
    };