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
button=(x,y,frame,alpha)=>{
    ctx.save()
    ctx.font="18px Impact"
    ctx.globalAlpha=alpha
    ctx.fillText(frame,x,y)
    ctx.restore()
}
TextField=(str,x,y,size,color="#fff")=>{
    ctx.fillStyle=color
    ctx.font=size+"px Impact"
    ctx.fillText(str,x,y)
}
ScaleLine=(x,y,gh,h=200)=>{
    ctx.save()
    ctx.beginPath()
    ctx.setLineDash([2]);
    ctx.strokeStyle="#fff"
    ctx.moveTo(x,y)
    ctx.lineTo(x,y+h)
    ctx.stroke()
    ctx.restore()
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.lineCap = 'round';
    for(var i=0,c=0;i<=h;i+=gh*2,c++){
        ctx.strokeStyle="#fff"
        if(c==5)rect1(ctx,x-gh/2,y+i,gh,gh,"#bb8",5,1)
        else rect1(ctx,x+gh/2,y+i,-gh,gh)
        ctx.stroke()
    }
    ctx.closePath()
    ctx.restore()
}
// UI
let adf= 0
UI=ms=>{
    // canvas.width = canvas.height = size * unit;
    //Tutorial(ms)
    //FadeOut(ms)
    //FadeIn(ms)
    //Blink(ms)
    ctx.fillStyle="#888"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    FadeIn(ms)
    ctx.save()
    
    // **************************************************
    ctx.font="15px Impact"
    ctx.fillStyle="#fff"
    let tw=canvasWidth/2,th=canvasHeight/2,ci=1
    let firstLineY=20,secondLineY=80,sizeW=100
    for(var k in keyStopRestartMute){
        ctx.globalCompositeOperation = "lighten"
        ctx.globalAlpha = Max(key1[keyStopRestartMute[k]],.5)
        
        ctx.fillText(ci-1?ci-2?"⏯️":"🎧":"🏠",tw-22*ci-5,firstLineY)
        ci++
    }
    ctx.restore()
    ctx.save()
    ctx.fillStyle="#fff"
    ctx.font="30px Impact"
    let score = Pad(IntToString(Min(25,9999)))
    ctx.fillText(score,tw-firstLineY*3.5,secondLineY-firstLineY)
    //ctx.strokeRect(tw-firstLineY*3.1,secondLineY-40,50,25)
    TextField("Meter",10,firstLineY+5,15)
    TextField(adf*10*ms+"  /m",15,firstLineY*2,10)
    TextField("G-Speed",10,firstLineY*3,15)
    TextField(adf*10*ms+"  /g",15,firstLineY*4,10)
    ctx.restore()
    bar(tw-firstLineY*2.5,secondLineY,40,sizeW,sizeW,"🧡")
    bar(tw-firstLineY,secondLineY,40,sizeW,sizeW,"🥶")
    
    ScaleLine(20,th/2,10,sizeW)
    ctx.globalCompositeOperation="exclusion"
    rect1(ctx,25,th/2+adf,2,2,"#b88",2,1)
    adf += 1
    adf = Min(sizeW,adf)
}
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
    ctx.fill()
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