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
let DownAlpha = 1,GoAlpha=0
/*
    ===============================
    Transform
    ===============================
*/
Tutorial=ms=>{
    ctx.save()
    let w = canvas.width/2
    let h = canvas.height/2
    // game frame
    ctx.fillStyle="#A0A"
    ctx.fillRect(0,0,w,h)

    // give an shadow frame
    ctx.globalAlpha=0.5
    ctx.fillStyle='#333'
    ctx.fillRect(0,0,w,h)
    ctx.beginPath();

    ctx.strokeStyle="#fff"
    ctx.setLineDash([9]);
    ctx.lineWidth=5
    ctx.strokeRect(w/2+w/4,5,75,25)
    ctx.moveTo(w/2,0)
    ctx.lineTo(w/2,h*ms*GoAlpha)

    GoAlpha+=2
    GoAlpha= math.min(h,GoAlpha)
    ctx.globalAlpha=GoAlpha/h
    ctx.stroke()
    ctx.fillStyle="#fff"
    ctx.font=w/20+"px sans-serif"
    ctx.fillText("Move Left",w/8,h-5)
    ctx.fillText("Move Right",w/8+w/2,h-5)
    let x = w/4+w/2,y=h/2+h/4
    ctx.moveTo(x,y)
    ctx.bezierCurveTo(x+100, y+100, x-100, y, x,h-w/20);
    x=w/4
    ctx.moveTo(x,y)
    ctx.bezierCurveTo(x+100, y+100, x-100, y, x,h-w/20);
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
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
Blink=ms=>{
    ctx.save()
    ctx.fillStyle="#000"
    colorAlpha.z+= bounce(ms)
    colorAlpha.z = Math.min(colorAlpha.z,1)
    ctx.globalAlpha = colorAlpha.z
    ctx.fillRect(0, 0, w, h);
    if(colorAlpha.z>=1)colorAlpha.z=0
    ctx.restore()
}
FadeOut=ms=>{
    ctx.fillStyle="#000"
    //colorAlpha.z = -Math.pow((2 - 1 * x - 1 * ms), 2) + Math.pow(2, 2)
    DownAlpha-=ms
    DownAlpha=Max(DownAlpha,0)
    ctx.globalAlpha = DownAlpha
    ctx.fillRect(0, 0, canvasWidth,canvasHeight);
}
FadeIn=ms=>{
    GoAlpha+=ms
    GoAlpha=Min(GoAlpha,1)
    ctx.globalAlpha  = GoAlpha 
    ctx.fillStyle="#333"
    ctx.fillRect(0,0,canvasWidth,canvasHeight)
}
//============================================
//          Object
//============================================
rect1=(ctx,x,y,w,h,c="red",r=5,a=0)=>{
    ctx.save()
    ctx.fillStyle=c
    ctx.beginPath()
    ctx.miterLimit=30
    ctx.lineWidth=2
    ctx.moveTo(x, y)
    ctx.lineTo(x+w, y)
    ctx.arcTo(x+w+r, y, x+w+r, y+r, r)
    ctx.lineTo(x+w+r,y+h+r)
    ctx.arcTo(x+w+r,y+h+r+r,x+w,y+h+r+r,r)
    ctx.lineTo(x,y+h+r+r)
    ctx.arcTo(x-r,y+h+r+r,x-r,y+h+r,r)
    ctx.lineTo(x-r,y+r)
    ctx.arcTo(x-r,y,x,y,r)
    if(a){
     ctx.fill()
    }else{
     ctx.stroke()
    }
    // for(var i=0;i<(x+w)/5+(y+r+h)/5;i++){

    // }
    ctx.restore()
}
bar=(x,y,h,live,ml,str)=>{
    ctx.save()
	let cy = h/ml*live,ty=y
    rect1(ctx,x,y+=(h-cy),5,cy,"#1fc",5,1)
    rect1(ctx,x,ty,5,h,"#000")
 	for(var i=0;i<live;i+=25){
    	rect1(ctx,x,ty+(h-h/ml*i),8,1,"#a11",1,1)
    }
    ctx.fillStyle="#0F0"
    ctx.font="20px Impact"
    ctx.fillText(str,x-11,ty+h+10*2)
    ctx.restore()
}
let bar1 = {
	x:50,
    y:20,
    h:30,
    life:100,
    ml:100,
    emoji:"🧡"
}
let bar2 = {
	x:60,
    y:20,
    h:30,
    life:100,
    ml:100,
    emoji:"🥶"
}
// UI
UI=ms=>{
    // canvas.width = canvas.height = size * unit;
    //Tutorial(ms)
    //FadeOut(ms)
    //FadeIn(ms)
    //Blink(ms)
    //FadeIn(ms)
    ctx.fillStyle="#888"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    rect(20,20,10,10,"#030")
    ctx.font="20px Impact"
    ctx.fillStyle="#fff"
    
    ctx.fillText("🎧",20,15)
    ctx.fillText("⏸",20,15)
    ctx.fillText("⌂",20,15)
    //🚫▶⌂
    rect(50,20,10,10,"#030")
    rect(80,20,10,10,"#030")
    //bar(bar1.x,bar1.y,bar1.h,bar1.life,bar1.ml,bar1.emoji)
    //bar(bar2.x,bar2.y,bar2.h,bar2.life,bar2.ml,bar2.emoji)
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