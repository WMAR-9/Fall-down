// draw each frame i need
// set canvas and ctx  
// use b canvas to create game object
GetCanvas=a=>document.getElementById(a)
GetContext=a=>a.getContext('2d',{
    alpha: false,
    desynchronized: true
})

const canvas = GetCanvas('a')
const ctx = GetContext(canvas)
let sa = 0
Frame=a=>{
 ctx.clearRect(0,0,500,500)
 //console.log(a)
 sa+=a
 ctx.globalAlpha  = sa 
 ctx.fillStyle="#0fa"
 ctx.fillRect(0,0,500,500)
}
Tutorial=_=>{
    ctx.setLineDash([8])
}
//Sence Frame
PauseGame=_=>{
    
}
StartGame=_=>{

}
EndGame=_=>{

}
Spotlight=vec=>{

}
PageIn=vec=>{

}
PageOut=vec=>{

}
Blink=ms=>{
    ctx.save()
    ctx.fillStyle="#000"
    var frequency = 200;
    ctx.globalAlpha=1
    ctx.fillRect(0,0,1024,768)
    ctx.restore()
}
// UI
UI=_=>{
    // canvas.width = canvas.height = size * unit;
    let w = canvas.width
    let h = canvas.height
    ctx.fillStyle="#Fb6"
    ctx.fillRect(0,0,w,h)
    ctx.beginPath();
    ctx.fillStyle="#333"
    ctx.strokeStyle="#fff"
    ctx.setLineDash([10]);
    ctx.lineWidth=10
    ctx.moveTo(w/2,0)
    ctx.lineTo(w/2,h)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
Rand=a=>Math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
SlopeY=(a,b,k=-20)=>a*k+b
//rect
rect=(x,y,w,h,c="red",r=5)=>{
    ctx.save()
    ctx.fillStyle=c
    ctx.beginPath()
    ctx.miterLimit=30
    ctx.lineWidth=2
    ctx.lineJoin = "miter";
    ctx.moveTo(x, y)
    ctx.lineTo(x+w, y)
    ctx.arcTo(x+w+r, y, x+w+r, y+r, r)
    ctx.lineTo(x+w+r,y+h+r)
    ctx.arcTo(x+w+r,y+h+r+r,x+w,y+h+r+r,r)
    ctx.lineTo(x,y+h+r+r)
    ctx.arcTo(x-r,y+h+r+r,x-r,y+h+r,r)
    ctx.lineTo(x-r,y+r)
    ctx.arcTo(x-r,y,x,y,r)
    //ctx.stroke()
    ctx.fill()
    // for(var i=0;i<(x+w)/5+(y+r+h)/5;i++){

    // }
    ctx.restore()
}

FontCreate=(char,color,type="#")=>{
    var fontCanvas = document.createElement('canvas')
    var fontCtx = b.getContext('2d')
    var x=y=20
    var s=3
    for(var i=0;i<fontjs[6].length;i++){
        for(var j = 0;j<fontjs[6][i].length;j++){
            if (fontjs[6][i][j]){
            rect(x+j*s*10,y+i*s*10,15,30)
            }
        }
    }
}
background1=(x,y,x1,y2,)=>{

}