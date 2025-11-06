export class PipeObstacles {

    x = 0;
    y = 0;
    height = 500;
    canvas;
    pencil;

    //pipe parts
    topPipe;
    bottomPipe;


    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
    }

    draw() {

        //top pipe
        let height = 500;


        this.pencil.fillStyle = "green";
        this.pencil.fillRect(this.x, this.y - (height - this.y), 100, this.height);


        //bottom pipe
        this.pencil.fillStyle = "green";
        this.pencil.fillRect(this.x, this.y + 200, 100, this.height);

    }
}