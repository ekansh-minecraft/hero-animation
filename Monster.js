class Monster
{


   constructor(x,y,r)
   {

     var options = {
       isStatic:false
     }


      this.x = x;
      this.y = y;
      this.r = r;

     
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     World.add(world,this.body)

     this.image=loadImage("Monster-01.png")
     this.sprite = createSprite(x,y,3*r,r)
     this.sprite.addImage("monster", this.image)
     this.sprite.scale = 0.10

   }
   display()
   {

    this.sprite.x = this.body.position.x;
    this.sprite.y = this.body.position.y;

    rectMode(CENTER)
    

    // push();
    // translate(pos.x,pos.y);
    // rotate(angle);
    // ellipseMode(RANDOM)
    // strokeWeight(4);
    // stroke("black");
    // fill("red");
    // ellipse(this.x,this.y,this.r)
    // pop(); 

    drawSprites()
   }


}