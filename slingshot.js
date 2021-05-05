class Slingshot
{
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }

        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }
        fly()
        {
         this.sling.bodyA = null;
        }

        Display()
        {
            if(this.sling.bodyA)
            {
                push()
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                line(pointA.x,pointA.y,pointB.x,pointB.y);
                pop()
            }


        }
    
}