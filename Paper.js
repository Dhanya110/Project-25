class Paper
{
constructor (x,y,r)
{
    var options={
        'restitution':0.3,
        'friction':0.8,
        'density':0.9,
        'isStatic': false
    }
    this.image=loadImage("paper.png")
    
    this.r=r;
    this.width=width;
    this.height=height;
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body);
}
display()
{
    var pappos=this.body.position;
    push()
    translate(pappos.x,pappos.y);
    strokeWeight(3);
    fill(255,0,255)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
    pop()
  }

}