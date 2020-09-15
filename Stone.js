class Stone {

    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1
        }
        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        this.image = loadImage("stone.png")
        World.add(world, this.body);
    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image,0,0,70,70)
        pop();
      }
}