class ball
{
    constructor(x,y,radius)
    {
      this.image = loadImage("hexagon.png");
      this.ball = Bodies.circle(x, y, radius);  
      this.radius = radius
      
      World.add(world,this.ball);
    }
    Display()
    {
        push()
        translate(this.ball.position.x,this.ball.position.y);
        imageMode(CENTER);
       image(this.image,0,0,this.radius,this.radius);
       pop()
    }
    
}

