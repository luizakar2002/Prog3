
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];


    let button = document.getElementById("End");
    button.addEventListener("click", End);
        function End() {
            matrix = [];
          }







    //! Getting DOM objects (HTML elements) for number

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let MonsterCount = document.getElementById('MonsterCount');
    let frcount = document.getElementById('frcount');
    let sccount = document.getElementById('sccount');
    let thirdcount = document.getElementById('thirdcount');


    //! Getting DOM objects (HTML elements) for weather
    let gseason = document.getElementById('gseason');
    let greseason = document.getElementById('greseason');
    let monstseason = document.getElementById('monstseason');
    let frseason = document.getElementById('frseason');
    let scseason = document.getElementById('scseason');
    let thseason = document.getElementById('thseason');


    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;

        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        MonsterCount.innerText = data.monsterCounter;
        frcount.innerText = data.firstCharacterCounter;
        sccount.innerText = data.secondCharacterCounter;
        thirdcount.innerText = data.thirdCharacterCounter;
        season = data.season;

        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new white color
        background('#ffffff');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("green");
                        rect(j * side, i * side, side, side);
                        gseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#3B7A3F");
                        rect(j * side, i * side, side, side);
                        gseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#60DE68");
                        rect(j * side, i * side, side, side);
                        gseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#05840D");
                        rect(j * side, i * side, side, side);
                        gseason.innerText = "աշուն";
                    }


                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("orange");
                        rect(j * side, i * side, side, side);
                        greseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#EAA93E");
                        rect(j * side, i * side, side, side);
                        greseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#E79712");
                        rect(j * side, i * side, side, side);
                        greseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#C07C0B");
                        rect(j * side, i * side, side, side);
                        greseason.innerText = "աշուն";
                    }


                } else if (matrix[i][j] == 0) {
                    fill('#ffffff');
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("red");
                        rect(j * side, i * side, side, side);
                        monstseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#E24B4B");
                        rect(j * side, i * side, side, side);
                        monstseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#D12727");
                        rect(j * side, i * side, side, side);
                        monstseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#BE0707");
                        rect(j * side, i * side, side, side);
                        monstseason.innerText = "աշուն";
                    }



                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("blue");
                        rect(j * side, i * side, side, side);
                        frseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#4F6CC4");
                        rect(j * side, i * side, side, side);
                        frseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#274CBE");
                        rect(j * side, i * side, side, side);
                        frseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#0935BC");
                        rect(j * side, i * side, side, side);
                        frseason.innerText = "աշուն";
                    }


                } else if (matrix[i][j] == 5) {
                    fill('yellow');
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("yellow");
                        rect(j * side, i * side, side, side);
                        scseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#C8D251");
                        rect(j * side, i * side, side, side);
                        scseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#DEEE28");
                        rect(j * side, i * side, side, side);
                        scseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#C0D103");
                        rect(j * side, i * side, side, side);
                        scseason.innerText = "աշուն";
                    }
                }

                else if (matrix[i][j] == 6) {
                    fill('#E319DE');
                    rect(j * side, i * side, side, side);
                    if(season == "winter"){
                        fill("#E319DE");
                        rect(j * side, i * side, side, side);
                        thseason.innerText = "ձմեռ";
                    }
                    else if(season == "spring"){
                        fill("#E000DA");
                        rect(j * side, i * side, side, side);
                        thseason.innerText = "գարուն";
                    }
                    else if(season == "summer"){
                        fill("#FF4BFA");
                        rect(j * side, i * side, side, side);
                        thseason.innerText = "ամառ";
                    }
                    else if(season == "autumn"){
                        fill("#6E0D6B");
                        rect(j * side, i * side, side, side);
                        thseason.innerText = "աշուն";
                    }
                }
            }
        }
    }
}