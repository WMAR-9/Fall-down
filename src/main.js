
// basic same variable
Record=_=>{

}
Set=_=>{

}
let BackgroundObject=[],GamePlayObject=[]

class BackObject{
    constructor(x,y,size=5,P=1){
      BackgroundObject.push(this)
    }
    Update(seconds){
      this.update(seconds)
      this.draw()
    }
    update(seconds){}
    draw(){}
    remove(){
      BackgroundObject.splice(BackgroundObject.indexOf(this),1)
    }
  }
class GameObject{
    constructor(x,y,o,w=32,h=32){
      //poisition
      this.pos = new Vector(x,y,w,h)
      this.VectorXY = new Vector(0,0)
      this.w = w
      this.h = h
      GamePlayObject.push(this)
    }
    Update(seconds){
      this.update(seconds)
      this.draw()
    }
    draw(){}
    update(seconds){}
    remove(){
      for(var i=0;i<10;i++)
        new Dead(this.pos.x,this.pos.y);
      PlaySound(4)
      GamePlayObject.splice(GamePlayObject.indexOf(this),1);
    }
  }
let lastUpdate = performance.now();
Update=_=>{
    const now = performance.now();
    const deltaMs = now - lastUpdate;
    const delta = deltaMs / 1000;
    lastUpdate = now;
    UI(delta)
}

MainLoop=_=>{
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    ctx.save()
    ctx.scale(2,2)
    Update()
    ctx.restore()
    requestAnimationFrame(MainLoop)
}

MainLoop()