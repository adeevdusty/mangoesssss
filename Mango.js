class Mango {

    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0.2,
            friction:0.5,
            density:1
        }
        this.r=r
        this.body=Matter.Bodies.circle(x,y,r,options)
        this.image = loadImage("mango.png")
        World.add(world, this.body);
    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle)
        image(this.image,0,0,70,70)
        pop();
      }
}