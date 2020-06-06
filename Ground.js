class Ground{
    constructor(x, y, width, height) {
  
       var options={
        isStatic:true
  
		}
        this.body=Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
		this.x=x;
		this.y=y;
		this.width=width
		this.height=height
  
      }
      display(){
		var groundPos=this.body.position;
		
		push()
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		strokeWeight(5);
		fill(255,51,204)
        rect(0,0,this.width, this.height);
        pop()
      }
  } 


 