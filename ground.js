class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.ground = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.ground);
    }
    display(){
        var pos = this.ground.position;
        var angle = this.ground.angle;
        push();
        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}