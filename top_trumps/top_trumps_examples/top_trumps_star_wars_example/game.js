// From https://codepen.io/db001/pen/BzAmYV

// swapi.co - for all your Star Wars API needs

var playerURL, compURL, playShip, compShip;

function getURL() {
    var link = "http://swapi.co/api/starships/";
    var arr = [2, 3, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23];
    var playRandom = Math.floor(Math.random() * 12);
    return link + arr[playRandom];
};

function checkDuplicate(p1, c1) {
    if (p1 === c1) {
        compURL = getURL;
        console.log("Switched");
    }
}

function newGame() {
    $('#computer').addClass('hidden');
    $('#result').empty();

    playerURL = getURL();
    compURL = getURL();

    checkDuplicate(playerURL, compURL);

    $.when($.getJSON(playerURL, function (data) {

    }),
        $.getJSON(compURL, function (json) {

        })).then(function (player, computer) {
            playShip = player[0];
            compShip = computer[0];

            $('#buttons button').removeClass('disabled');

            $('#player').html(formatDisplay(playShip));
            $('#computer').html(formatDisplay(compShip));

            var pCost = getVari(playShip.cost_in_credits);
            var cCost = getVari(compShip.cost_in_credits);
            var pMax = getVari(playShip.max_atmosphering_speed);
            var cMax = getVari(compShip.max_atmosphering_speed);
            var pHyper = getVari(playShip.hyperdrive_rating);
            var cHyper = getVari(compShip.hyperdrive_rating);
            var pMGLT = getVari(playShip.MGLT);
            var cMGLT = getVari(compShip.MGLT);

            $('#cost').on('click', function () {
                compare(pCost, cCost);
            });
            $('#max').on('click', function () {
                compare(pMax, cMax);
            });
            $('#hyper').on('click', function () {
                compare(pHyper, cHyper);
            });
            $('#MGLT').on('click', function () {
                compare(pMGLT, cMGLT);
            });

        })
};

$(document).ready(function () {
    newGame();
    $('#newGame').on('click', newGame);
});

function compare(p1, c1) {
    $('#computer').removeClass('hidden');
    if (p1 > c1) {
        $('#result').html("The force is with you (You win!)");
    } else if (c1 > p1) {
        $('#result').html("You will never defeat the dark side (You lose)");
    } else if (p1 === c1) {
        $('#result').html("Do, or do not, it is a tie");
    } else {
        $('#result').html("I've got a bad feeling about this (something went wrong...)");
    }
    $('#buttons button').addClass('disabled');
}

function getVari(category) {
    var returnVal;
    if (isNaN(parseInt(category))) {
        returnVal = 0;
    } else {
        returnVal = parseInt(category);
    }
    return returnVal;
}

function formatDisplay(name) {
    return "<span class='card-title'>" + name.name + "</span><p>Model: " + name.model + "</p><p>Cost: " + name.cost_in_credits + "</p><p>Max Atmos Spd: " + name.max_atmosphering_speed + "</p><p>Hyperdrive Rtg: " + name.hyperdrive_rating + "</p><p>MGLT: " + name.MGLT + "</p>";
};