
class Ground
{
    constructor(x,y,w,h)
    {

       var options = {

         isStatic:true

       }

       this.body = Bodies.rectangle(x,y,w,h,options)
       this.color = color(random(0,255), random(0,255), random(0,255))
       this.width = w
       this.height = h
       World.add(world,this.body)

    }

     display()
     {
       var pos = this .body.position
       rectMode(CENTER)
       fill(this.color)
       rect(pos.x,pos.y,this.width,this.height)
     
     }

}