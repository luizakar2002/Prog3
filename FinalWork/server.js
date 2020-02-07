
//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Monster = require("./modules/Monster.js");
var FirstCharacter = require("./modules/FirstCharacter.js");
var SecondCharacter = require("./modules/SecondCharacter.js");
var ThirdCharacter = require("./modules/ThirdCharacter.js");
let random = require('./modules/random');
timeforseason = 0;
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
MonsterArr = [];
FirstCharacterArr = [];
SecondCharacterArr = [];
ThirdCharacterArr = [];
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
monsterHashiv = 0;
fstcharHashiv = 0;
sndcharHashiv = 0;
thirdcharHashiv = 0;
//! Setting global arrays  -- END


//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, grassEater, monster, first, second, third) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < monster; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < first; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < second; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < third; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(20, 100, 50, 50, 50, 50, 50);
//console.log(matrix);
//! Creating MATRIX -- END 



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;

            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var monster = new Monster(x, y);
                MonsterArr.push(monster);
                monsterHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var first = new FirstCharacter(x, y);
                FirstCharacterArr.push(first);
                fstcharHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var second = new SecondCharacter(x, y);
                SecondCharacterArr.push(second);
                sndcharHashiv++;
            }
            else if (matrix[y][x] == 6) {
                var third = new ThirdCharacter(x, y);
                ThirdCharacterArr.push(third);
                thirdcharHashiv++;
            }


        }
    }
}
creatingObjects();
// console.log(grassArr.length);
// console.log(grassEaterArr.length);
// console.log(MonsterArr.length);
// console.log(FirstCharacterArr.length);
// console.log(SecondCharacterArr.length);





function game() {
    timeforseason++;
    if (timeforseason >= 0 && timeforseason <= 5) {
        season = "winter";
    }
    else if (timeforseason >= 6 && timeforseason <= 11) {
        season = "spring";
    }
    else if (timeforseason >= 12 && timeforseason <= 17) {
        season = "summer";
    }
    else if (timeforseason >= 18 && timeforseason <= 23) {
        season = "autumn";
    }
    else{
        timeforseason = 0;
    }    



    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].move();
            grassEaterArr[i].eat();
            grassEaterArr[i].mul();
            grassEaterArr[i].die();
        }
    }
    if (MonsterArr[0] !== undefined) {
        for (var i in MonsterArr) {
            MonsterArr[i].move();
            MonsterArr[i].eat();
            MonsterArr[i].mul();
            MonsterArr[i].die();
        }
    }
    if (FirstCharacterArr[0] !== undefined) {
        for (var i in FirstCharacterArr) {
            FirstCharacterArr[i].jump();
            FirstCharacterArr[i].eat();
            FirstCharacterArr[i].mul();
            FirstCharacterArr[i].die();
        }
    }
    if (SecondCharacterArr[0] !== undefined) {
        for (var i in SecondCharacterArr) {
            SecondCharacterArr[i].move();
            SecondCharacterArr[i].eat();
            SecondCharacterArr[i].mul();
            SecondCharacterArr[i].die();
        }
    }
    if (ThirdCharacterArr[0] !== undefined) {
        for (var i in ThirdCharacterArr) {
            ThirdCharacterArr[i].move();
            ThirdCharacterArr[i].eat();
            ThirdCharacterArr[i].mul();
            ThirdCharacterArr[i].die();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEaterCounter: grassEaterHashiv,
        monsterCounter: monsterHashiv,
        firstCharacterCounter: fstcharHashiv,
        secondCharacterCounter: sndcharHashiv,
        thirdCharacterCounter: thirdcharHashiv,
        season: season
    }
    
    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
    //console.log(sendData)
}



setInterval(game, 1000)