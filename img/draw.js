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
    // ctx.fillStyle="#F1F"
    // ctx.fillRect(0,0,w,h)

}
let fontjs = {
    N:[[1,,,1],[1,1,,1],[1,,,1],[1,,1,1],[1,,,1]],
    K:[[1],[1,,1],[1,1],[1,1],[1,,1]],
    F:[[1,1,1],[1],[1,1,1],[1],[1]],
    G:[[1,1,1],[1],[1,1,1],[1,,1],[1,1,1]],
    D:[[1],[1,1],[1,,1],[1,1],[1]],
    V:[[1,,1],[1,,1],[1,,1],[1,1,1],[,1]],
    A:[[,1],[1,,1],[1,1,1],[1,,1],[1,,1]],
    T:[[1,1,1],[1,1,1],[,1],[,1],[,1]],
    L:[[1],[1],[1],[1],[1,1,1]],
    Y:[[1,1,1],[1,,1],[1,,1],[,1],[,1]],
    I:[[1,1,1],[,1],[,1],[,1],[1,1,1]],
    M:[[1,,1],[1,1,1],[1,1,1],[1,,1],[1,,1]],
    S:[[1,1,1],[1],[,1],[,,1],[1,1,1]],
    C:[[,1,1],[1],[1],[1],[,1,1]],
    O:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],
    R:[[1,1,1],[1,,1],[1,1],[1,,1],[1,,1]],
    E:[[1,1,1],[1],[1,1,1],[1],[1,1,1]],
    P:[[1,1,1],[1,,1],[1,1,1],[1],[1]],
    U:[[1,,1],[1,,1],[1,,1],[1,,1],[,1]],
    X:[[1,,1],[,1],[1,,1]],x:[[1,,1],[1,,1],[,1],[1,,1],[1,,1]],
    g:[[1,1,1,1],[1],[1,,1,1],[1,,,1],[1,1,1,1]],
    "!":[[1],[1],[1],[],[1]],
    ":":[[],[,1],[],[,1]],
    "<":[[1,0,0],[0,1,0],[0,0,1],[0,1,0],[1,0,0]],
    ">":[[0,0,1],[0,1,0],[1,0,0],[0,1,0],[0,0,1]],
    "/":[[,,1],[,,1],[,1],[1],[1]],
    "-":[[],[],[1,1,1]],
    ˇ:[[,,,,,1],[,,,,1],[1,,,1],[1,,1],[,1]],
    ".":[[],[],[],[,1,1],[,1,1]],
    "+":[[,1],[1,1,1],[,1]],
    " ":[],
    0:[[,1],[1,,1],[1,,1],[1,,1],[,1]],
    1:[[1,1],[,1],[,1],[,1],[1,1,1]],
    2:[[1,1,1],[,,1],[,1],[1],[1,1,1]],
    3:[[1,1],[,,1],[1,1],[,,1],[1,1]],
    4:[[1,,1],[1,,1],[1,1,1],[,,1],[,,1]],
    5:[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],
    6:[[1,1,1],[1],[1,1,1],[1,,1],[1,1,1]],
    7:[[1,1,1],[1,,1],[,,1],[,,1],[,,1]],
    8:[[1,1,1],[1,,1],[,1],[1,,1],[1,1,1]],
    9:[[1,1,1],
       [1,0,1],
       [1,1,1],
       [0,0,1],
       [1,1,1]]
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