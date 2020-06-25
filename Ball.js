class Ball{
    constructor(x,y,radius,color) {
        var options = {
            'restitution':1,
            'friction':1.0,
            'density':100
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.color = color
       Matter.Body.setMass(this.body,this.body.mass * 5)
       // this.body.setAngle(this.body,angle)
       World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
      
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}


