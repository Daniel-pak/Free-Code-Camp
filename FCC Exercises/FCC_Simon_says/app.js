$(document).ready(function () {

    var game = {
        moves: [],
        gameOptions: ["#green", "#red", "#yellow", "#blue"],
        moveCount: 0,
        randomMovePicker: function () {
            var color = Math.floor(Math.random() * 4);
            game.moves.push(game.gameOptions[color]);
            game.moveCount++;
        },
        player: [],
        strict: false
    };

    $("#strict").on("click", function () {
        game.strict = !game.strict;
        if (game.strict === true) {
            $("#strict").addClass("btn-danger");
            $("#strict").removeClass("btn-primary");
        } else {
            $("#strict").addClass("btn-primary");
            $("#strict").removeClass("btn-danger");
        }
    });

    $("#start").on("click", function () {
        generateMove();
    })

    function generateMove() { //generate random move for computer
        var move = Math.floor(Math.random() * 4);
        game.moves.push(game.gameOptions[move]);
        game.moveCount++;
        $("#number").text(game.moveCount);
        console.log(game.moves);
        computerMove();
        clearPlayer();
    }

    function showMove(color) { //show move by adding highlight
        $(color).addClass('hover');
        playSound(color);
        setTimeout(function () {
            $(color).removeClass('hover')
        }, 500)

    }

    function computerMove() { //show all of the computers currently stored moves
        var i = 0;
        var moves = setInterval(function () {
            showMove(game.moves[i]);
            i++;
            if (i >= game.moves.length) {
                clearInterval(moves);
            }
        }, 1000)
    }

    //function to create player object and match against the computer algorithm.
    function clearPlayer() {
        game.player = [];
    }

    $("div.innerPiece").on("click", function () {
        var id = $(this).data("cell-id")
        $(this).mousedown(function () {
            $(this).addClass('hover');
        })
        $(this).mouseup(function () {
            $(this).removeClass('hover');
        })
        var fieldColor = game.gameOptions[id - 1]
        playSound(fieldColor)
        console.log(id);
        addMoveToPlayer(id);
    })

    function addMoveToPlayer(cellNumber) {
        var fieldColor = game.gameOptions[cellNumber - 1]
        game.player.push(fieldColor);
        console.log(game.player)
        playerTurnCheck();
    }

    function playerTurnCheck() {
        if (game.player[game.player.length - 1] !== game.moves[game.player.length - 1]) {
            if (game.strict) {
                alert("try again from scratch!");
                newGame();
            } else {
                alert("Try again!");
                clearPlayer();
                computerMove();
            }
        } else {
            console.log('Good Move!');
            var check = game.player.length === game.moves.length;
            if (check) {
                if (game.moveCount == 20) {
                    alert('You won! Congrats.');
                } else {
                    generateMove();
                }
            }
        }
    }

    function newGame() {
        game = {
            moves: [],
            gameOptions: ["#green", "#red", "#yellow", "#blue"],
            moveCount: 0,
            randomMovePicker: function () {
                var color = Math.floor(Math.random() * 4);
                game.moves.push(game.gameOptions[color]);
                game.moveCount++;
            },
            player: [],
            strict: false
        };
    }

    function playSound(color) {
        switch (color) {
        case "#green":
            var sound = document.getElementById("greenAudio");
            sound.play();
            break;
        case "#red":
            var sound = document.getElementById("redAudio");
            sound.play();
            break;
        case "#yellow":
            var sound = document.getElementById("yellowAudio");
            sound.play();
            break;
        case "#blue":
            var sound = document.getElementById("blueAudio");
            sound.play();
            break;
        }

    }
})