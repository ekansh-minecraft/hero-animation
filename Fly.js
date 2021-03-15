class Fly
{
    constructor(x,y,r)
    {
        var options = {

        density: 1,
        frictionAir: 1,
        isStatic: true

        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.w = 5*r
        this.h = 2*r
        
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world,this.body);


        var sprImage

        sprImage = loadImage("images/Superhero-01.png")
        this.sprite = createSprite(x, y, r, r)
        this.sprite.addImage("superhero", sprImage)
        this.sprite.scale = 0.15
    }
    display()
    {
       this.sprite.x = this.body.position.x
       this.sprite.y = this.body.position.y
       rectMode(CENTER)

       drawSprites()
    }
    


}