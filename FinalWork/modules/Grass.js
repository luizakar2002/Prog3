var LiveForm = require("./LiveForm");

module.exports = class Grass extends LiveForm {

   
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        console.log(newCell, this.multiply);
        if (this.multiply >= 3 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }

}
