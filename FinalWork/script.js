


// stex zangvacnery verjum Arr barov
var m = 25
var grassArr = [];
var grassEaterArr = [];
var MonsterArr=[];
var FirstCharacterArr=[];
var SecondCharacterArr=[];
var side = 30;
let matrix = []; // Մատրիցի ստեղծում

function setup() {
    
    let rows = 50; // Տողերի քանակ
    let columns = 50; // Սյուների քանակ
    
    for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
    let a = Math.floor(Math.random() * 100);
    if (a >= 0 && a < 20) {
    matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
    }
    if (a >= 10 && a < 40) {
    matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
    }
    else if (a >= 20 && a < 50) {
    matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
    }
    else if (a >= 25 && a < 70) {
    matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
    }
    else if (a >= 35 && a < 90) {
    matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
    }
    else if (a >= 45 && a < 100) {
    matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
    }
    }
    }



    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#E1E1E1');

    
//pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var mn = new Monster(x,y,3);
                MonsterArr.push(mn);
                
            }
            else if (matrix[y][x] == 4) {
                var mn = new FirstCharacter(x,y,4);
                FirstCharacterArr.push(mn);
                
            }
            else if (matrix[y][x] == 5) {
                var mn = new SecondCharacter(x,y,5);
                SecondCharacterArr.push(mn);
                
            }
        }
    }
 
}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#0FAE18");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("#F3EF76");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#F6F6F6");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#720EA8");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#DD1313");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#061ECE");
                rect(x * side, y * side, side, side);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }

    for (var i in MonsterArr) {
        MonsterArr[i].move();
        MonsterArr[i].eat();
        
        MonsterArr[i].mul();
        MonsterArr[i].die();
        
    }

    for (var i in FirstCharacterArr) {
        
        FirstCharacterArr[i].jump();
        FirstCharacterArr[i].eat();
        
        FirstCharacterArr[i].mul();
        FirstCharacterArr[i].die();
        
    }

    for (var i in SecondCharacterArr) {
        SecondCharacterArr[i].move();
        SecondCharacterArr[i].eat();
       
        SecondCharacterArr[i].mul();
        SecondCharacterArr[i].die();
        
    }

}



