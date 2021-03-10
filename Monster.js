class Monster
{


   constructor(x,y,r)
   {

     var options = {

       isStatic:true


     }


      this.x = x;
      this.y = y;
      this.r = r;

     this.image=loadImage("Monster-01.png")
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     World.add(world,this.body)

   }
   display()
   {
    pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RANDOM)
    strokeWeight(4);
    stroke("black");
    fill("red");
    ellipse(this.x,this.y,this.r)
    pop(); 
   }


}