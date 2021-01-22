class Dustbin{
  constructor(x,y,width,height){
      var options={
          isStatic:true,
          friction:1,
          density:0.5,
          restitution:0
  
          
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.body)
  }
  display(){
  var dust=this.body.position;
  rectMode(CENTER)
  rect(dust.x,dust.y,this.width,this.height)
    }
} 