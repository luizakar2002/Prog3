
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];


    


    //! Getting DOM objects (HTML elements) for number

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let MonsterCount = document.getElementById('MonsterCount');
    let frcount = document.getElementById('frcount');
    let sccount = document.getElementById('sccount');
    let thirdcount = document.getElementById('thirdcount');


    

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




        let weather = document.getElementById('season');
        weather.innerText = data.season;

        //! Every time it creates new Canvas with new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new white color
        background('#ffffff');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(season == "winter"){
                        fill("green");
                        
                    }
                    else if(season == "spring"){
                        fill("#3B7A3F");
                        
                    }
                    else if(season == "summer"){
                        fill("#60DE68");
                        
                    }
                    else if(season == "autumn"){
                        fill("#05840D");
                        
                    }


                } else if (matrix[i][j] == 2) {
                    if(season == "winter"){
                        fill("orange");
                        
                    }
                    else if(season == "spring"){
                        fill("#EAA93E");
                        
                    }
                    else if(season == "summer"){
                        fill("#E79712");
                        
                    }
                    else if(season == "autumn"){
                        fill("#C07C0B");
                        
                    }


                } else if (matrix[i][j] == 0) {
                    fill('#ffffff')

                } else if (matrix[i][j] == 3) {
                    if(season == "winter"){
                        fill("red");
                        
                    }
                    else if(season == "spring"){
                        fill("#E24B4B");
                        
                    }
                    else if(season == "summer"){
                        fill("#D12727");
                        
                    }
                    else if(season == "autumn"){
                        fill("#BE0707");
                        
                    }



                } else if (matrix[i][j] == 4) {
                    if(season == "winter"){
                        fill("blue");
                        
                    }
                    else if(season == "spring"){
                        fill("#4F6CC4");
                        
                    }
                    else if(season == "summer"){
                        fill("#274CBE");
                        
                    }
                    else if(season == "autumn"){
                        fill("#0935BC");
                        
                    }


                } else if (matrix[i][j] == 5) {
                    if(season == "winter"){
                        fill("yellow");
                       
                    }
                    else if(season == "spring"){
                        fill("#C8D251");
                        
                    }
                    else if(season == "summer"){
                        fill("#DEEE28");
                        
                    }
                    else if(season == "autumn"){
                        fill("#C0D103");
                        
                    }
                }

                else if (matrix[i][j] == 6) {
                    if(season == "winter"){
                        fill("#E319DE");
                        
                    }
                    else if(season == "spring"){
                        fill("#E000DA");
                        
                    }
                    else if(season == "summer"){
                        fill("#FF4BFA");
                        
                    }
                    else if(season == "autumn"){
                        fill("#6E0D6B");
                        
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }


//event
let button = document.getElementById("End");
    button.addEventListener("click", End);
        function End() {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1 || matrix[i][j] == 2 || matrix[i][j] == 3 || matrix[i][j] == 4 || matrix[i][j] == 5 || matrix[i][j] == 0 || matrix[i][j] == 6) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }

    }