class Obs{
    constructor(x,y,radius) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        
       // this.body.setAngle(this.body,angle)
       World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("orange");
       
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}

