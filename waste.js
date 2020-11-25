class Waste{
    constructor(x,y,width,height){
        var options={
        'friction':1.0,
        'isStatic':true
    }
    this.image=loadImage("bin.png")
        this.x=x;
        this.y=y;
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
        
}0
    display(){
      fill("red")
        const pos=this.body.position;
        rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height)
            push()
            imageMode(CENTER)
            image(this.image,1000,585,190,190)
            pop()
    }
};