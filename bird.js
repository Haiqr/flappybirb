export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil; 


    ySpeed = 1;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }



    draw () {
       //top pipe
        this.pencil.fillStyle = 'red'; // Set the fill color
        this.pencil.fillRect(this.x, this.y, this.width, this.height); // x, y, w, h
    }





    gravity() {
        this.y += this.ySpeed;
        this.ySpeed += 1;

        if(this.ySpeed > 2){
            this.ySpeed = 2;
        }
    }
}