class Paper{
    constructor(x,y,r){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2   
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r/2,options)
    World.add(world,this.body)
 }
 display(){
     var paperpos=this.body.position

     push();
     strokeWeight(3);
     fill("green")
     ellipseMode(CENTER)
     ellipse(paperpos.x,paperpos.y,this.r,this.r)
     pop();
 }
}   