class Fly
{
    constructor(x,y,r)
    {
        var options = {

        density: 1,
        frictionAir: 1

        }

        this.x = x;
        this.y = y;
        this.r = r;
        
        this.body = Bodies.circle(this.x, this.y, (this.r)/2,options);
        World.add(world,this.body);


        var sprImage

        sprImage = loadImage("Superhero-o1.png")

    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            stroke("black");
            fill("blue");
            rect(0,0,this.r*3,this.r);
        pop();
    }
    


}