// draw each frame i need
// set canvas and ctx  

let DownAlpha = 1,GoAlpha=0

/**
 * Font Frame
 * output >> {A:Image,B:Image}
 * 
 */
line=(ctx,x,y)=>{
	ctx.lineTo(x,y);
}
CreateFont=(limitLine,color,type=1)=>{
    //let allString = "ABCDEFGHIJKLMNOPQRSTUVXYWZ!@#$%~^&=123456790"
    let allString = "ABCDE"
    let fontTotal ={}
    
    for(var j=0;j<allString.length;j++){
        var i;
        var fontCanvas = document.createElement('canvas')
        var fontCtx = fontCanvas.getContext('2d')
        fontCtx.font = "bold 100px Impact";
        var tx=ty=0
        var th=h=fontCtx.height=82,tw=w=fontCtx.width=fontCtx.measureText(allString[j]).width
        //fontCtx.fillStyle='rgba(255,255,255,0)'
        const fixHeight = 82
        fontCtx.scale(2,2)
        //fontCtx.fillRect(0,0,fixHeight,fixHeight)
        fontCtx.fillStyle=color
        fontCtx.strokeStyle="#800"
        fontCtx.fillText(allString[j],0,fixHeight)
        fontCtx.globalCompositeOperation="destination-in"
        // for(i=0;i<limitLine;i++){
        //     tw-=w/limitLine
        //     ty+=h/limitLine
        //     fontCtx.moveTo(tx,ty)
        //     fontCtx.lineTo(tw,th)
        // }
        ty=0
        tw=w
        for(i=0;i<limitLine;i++){
            fontCtx.moveTo(tx,ty)
            fontCtx.lineTo(tw,th)
            th-=h/limitLine
            tx+=w/limitLine
            
        }
        tx=0
        ty=h
        th=0
        tw=w
        for(i=0;i<limitLine;i++){
            th+=h/limitLine
            tx+=w/limitLine
            fontCtx.moveTo(tx,ty)
            fontCtx.lineTo(tw,th)
        }
        tx=0
        ty=h
        th=0
        tw=w
        for(i=0;i<limitLine;i++){
            fontCtx.moveTo(tx,ty)
            fontCtx.lineTo(tw,th)
            ty-=h/limitLine
            tw-=w/limitLine
        }
        fontCtx.stroke()
        var imagea = new Image();
        imagea.src = fontCanvas.toDataURL();
        fontTotal[allString[j]]=imagea
    }
    return fontTotal
}

let sdfsdf = CreateFont(10,"#0f1",1) 
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
    ctx.save()
    GoAlpha+=ms
    GoAlpha=Min(GoAlpha,2)
    ctx.globalAlpha  = GoAlpha 
    ctx.fillStyle="#333"
    ctx.fillRect(0,0,canvasWidth,canvasHeight)
    ctx.restore()
}   
//============================================
//          Object
//============================================
rect1=(ctx,x,y,w,h,c="red",r=5,a=0)=>{
    ctx.save()
    ctx.fillStyle=c
    ctx.strokeStyle=c
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
    ctx.lineWidth = 3
    for(var i=0,c=0;i<=h;i+=gh*2,c++){
        ctx.strokeStyle="#fff"
        if(c==5)rect1(ctx,x-gh/2,y+i,gh,gh,"#bb8",5,1)
        else rect1(ctx,x+gh/2,y+i,-gh,gh)
        ctx.stroke()
    }
    ctx.restore()
}
CreateObject=color=>{
    var fontCanvas = document.createElement('canvas')
    var fontCtx = GetContext(fontCanvas),ww,hh
    ww=hh=fontCanvas.width=fontCanvas.height=32
    fontCtx.scale(2,2);
    fontCtx.fillStyle=shadeColor(color,-10);
    fontCtx.fillRect(0,0,ww,hh);
    ww = ww/6,hh=hh/6
    let x=y=c=0,gap=0
    for(var i=0;i<9;i++){
        fontCtx.fillStyle=shadeColor(color,RandInt(3))
        let appendWidth= RandInt(ww/2)
        fontCtx.fillRect(x+gap,y,ww+appendWidth,hh)
        //fontCtx.strokeRect(x+oldWidth,y,ww+tt,hh)
        gap=appendWidth
        if(c==2){
            y+=hh
            x=c=0
        }else{
            x+=ww
            c++
        }
    }
    var imagea = new Image();
    imagea.src = fontCanvas.toDataURL();
    return imagea;
}
let wallImage= CreateObject("#555555")
GameObjectTest=[]
AddOneLine=()=>{
    //let tw = canvasWidth/2,th=canvasHeight/2
    //tw/32
    GameObjectTest.push()
}
Add=()=>{
    //let tw = canvasWidth/2,th=canvasHeight/2
    //tw/32
    let tw = 250,th=250
    for(let j =0;j<th/32;j++){
        for (let i = 0; i < tw/32; i++) {
            // 
            GameObjectTest.push({
                x:64*i,
                y:64*j,
                img:CreateObject("#bb8888")
            })
        }
    }
}
Item=()=>{

}
// main map
/*
        let pr = e.z/5
        e.x += (e.x-centerX)*(e.wh/e.z)
        e.x += (centerX-e.x)/e.z
        e.y -= (centerY-0)/e.z
        e.z-=.5
        e.z=Math.max(e.z,0)
        rect1(ctx,e.x,e.y,pr,pr,"#0a0",1,1)
        ctx.save()
        ctx.fillStyle="#888"
        ctx.globalAlpha=1-(e.z/e.wh)
*/
MainGame=ms=>{
    ctx.save()
    let targetX=tw=canvasWidth/2,th=canvasHeight/2,size=128
    ctx.strokeStyle="#FF1"
    ctx.fillStyle="#555"
    ctx.moveTo(tw/2,0)
    ctx.lineTo(tw/2,th)
    let tempSize = 32
    ctx.strokeRect(tw/2-tempSize/2,th/4,tempSize,tempSize)
    ctx.moveTo(tw/4,0)
    ctx.lineTo(0,th)
    ctx.lineTo(tw,th)
    ctx.lineTo(tw/2+tw/4,0)
    ctx.fill()
    ctx.stroke()
    ctx.clip()
    //ctx.drawImage(wallImage,200,80,32,32)
    GameObjectTest.forEach(e=>{
        ctx.drawImage(e.img,e.x,e.y,64,64)
        e.y-=ms*10
        //  rect1(ctx,e.x,e.y,e.w,e.h,e.c,2,1)
    })
    //ctx.strokeRect(tw/2-tempSize/2,th/4,tempSize,tempSize)
    // GameObjectTest.forEach(e=>{
        
    //     // formula
    //     // e.x += (e.x-centerX)*(e.wh/e.z)
    //     e.wh -=ms*50
    //     e.x += (tw/2-e.x)/e.z
    //     e.y -= (th+80)/e.z
    //     let pr = e.wh/16
    //     e.z-=ms*25
    //     e.z=Math.max(e.z,0)
    //     //rect1(ctx,e.x,e.y,pr,pr,"#0a0",1,1)
    //     ctx.save()
    //     ctx.fillStyle="#333"
    //     ctx.strokeStyle="#FFF"
    //     //ctx.globalAlpha=(e.z/e.wh)
    //     ctx.fillRect(e.x,e.y,pr,pr)
    //     ctx.strokeRect(e.x,e.y,pr,pr)
    //     //ctx.fillRect(100,e.y,pr,pr)
    //     ctx.restore()
    //     if(e.y<-pr*1.5){
    //         GameObjectTest.splice(GameObjectTest.indexOf(e),1)
    //     }
    //     //console.log("here")
    // })
    // if(!GameObjectTest.length)Add()
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
    let tw=canvasWidth/2,th=canvasHeight/2,ci=1
    let firstLineY=20,secondLineY=80,sizeW=100
    ctx.fillStyle="#0077B6"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    //GoAlpha>=2?0:FadeIn(ms)
    ctx.save()
    MainGame(ms)
    //ctx.drawImage(wallImage,0,0,tw,th)
    // GameObjectTest.forEach(e=>{
    //     //ctx.drawImage(e.img,e.x,e.y,64,64)
    //     //e.y-=ms*10
    //     rect1(ctx,e.x,e.y,e.w,e.h,e.c,2,1)
    // })
    // **************************************************
    // ctx.font="15px Impact"
    // ctx.fillStyle="#fff"
    // drawCube(tw/4,th+th/8,tw/4,tw/4,th/2,"#555555")
    // //drawCube(tw/4,th+th/8,tw/4,tw/4,th/2,"#114131")
    

    for(var k in keyStopRestartMute){
        ctx.globalCompositeOperation = "lighten"
        ctx.globalAlpha = Max(1-key1[keyStopRestartMute[k]],.5)
        let x = tw-22*ci-5,y=firstLineY,h=12,w=18
        resizeWindow?0:checkButton.push({x,y:y-10,w,h})
        ctx.fillText(ci-1?ci-2?"⏯️":"🎧":"🏠",x,y)
        ci++
    }
    resizeWindow=1
    ctx.restore()
    ctx.save()
    ctx.fillStyle="#fff"
    // ctx.drawImage(sdfsdf.E,80,50,64,64)
    // ctx.drawImage(sdfsdf.E,80,50,64,64)
    ctx.font="30px Impact"
    let score = Pad(IntToString(Min(25,9999)))
    ctx.fillText(score,tw-firstLineY*3.5,secondLineY-firstLineY)
    //ctx.strokeRect(tw-firstLineY*3.1,secondLineY-40,50,25)
    TextField("Meter",10,firstLineY+5,15)
    TextField(((adf*10*ms)|0)+"  /m",15,firstLineY*2,10)
    TextField("G-Speed",10,firstLineY*3,15)
    TextField(((adf*10*ms)|0)+"  /g",15,firstLineY*4,10)
    ScaleLine(20,th/2,10,sizeW)
    bar(tw-firstLineY*2.5,secondLineY,40,sizeW,sizeW,"🧡")
    bar(tw-firstLineY,secondLineY,40,sizeW,sizeW,"🥶")
    //ctx.globalCompositeOperation="exclusion"
    rect1(ctx,25,th/2+adf,2,2,"#b88",2,1)
    rect1(ctx,32,32,32,32,"#fff",0,1)
    // x,y  // x-(-w)-8

    //rect1(ctx,32,16,-32,-32,"#333",16,1)
    ctx.drawImage(wallImage[(adf%wallImage.length)|0],32,32,32,32)
    adf += .5
    //adf = Min(sizeW,adf)
    ctx.restore()
}

// Colour adjustment function
// Nicked from http://stackoverflow.com/questions/5560248

function shadeColor(color, percent) {
    color = color.substr(1);
    var num = parseInt(color, 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}
// cubic from https://codepen.io/AshKyd/pen/JYXEpL?editors=1010
// Draw a cube to the specified specs
function drawCube(x, y, wx, wy, h, color) {
      ctx.beginPath()
      ctx.moveTo(x, y);
      ctx.lineTo(x - wx, y - wx * 0.5);
      ctx.lineTo(x - wx, y - h - wx * 0.5);
      ctx.lineTo(x, y - h * 1);
      ctx.lineTo(x,y)
      ctx.fillStyle = shadeColor(color, -10);
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.fill();
      ctx.closePath()
      ctx.beginPath()
      ctx.moveTo(x, y);
      ctx.lineTo(x + wy, y - wy * 0.5);
      ctx.lineTo(x + wy, y - h - wy * 0.5);
      ctx.lineTo(x, y - h * 1);
      ctx.lineTo(x,y)
      ctx.fillStyle = shadeColor(color, 10);
      ctx.strokeStyle = shadeColor(color, 50);
      ctx.stroke();
      ctx.fill();
      ctx.closePath()
      ctx.beginPath()
      ctx.moveTo(x, y - h);
      ctx.lineTo(x - wx, y - h - wx * 0.5);
      ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
      ctx.lineTo(x + wy, y - h - wy * 0.5);
      ctx.lineTo(x,y-h)
      ctx.fillStyle = shadeColor(color, 30);
      ctx.strokeStyle = shadeColor(color, 60);
      ctx.stroke();
      ctx.fill();
      ctx.closePath()
      
}
background1=_=>{
    var fontCanvas = document.createElement('canvas')
    var fontCtx = fontCanvas.getContext('2d')
    fontCanvas.width=canvasWidth/2
    fontCanvas.height=canvasHeight/2
    console.log(canvasWidth,canvasHeight)
    let tw = canvasWidth/2,th = canvasHeight/2
    var radialGradient = fontCtx.createRadialGradient(tw/2,th/2, 40, tw, th, 300);
    radialGradient.addColorStop(.3, '#1ff0');
    radialGradient.addColorStop(.7, '#fff0');
    radialGradient.addColorStop(.8, '#fff');
    radialGradient.addColorStop(1, '#111');
    fontCtx.fillStyle = radialGradient;
    fontCtx.fillRect(0, 0, w, h);
    //GameObjectTest=[]
    for(var i=0;i<tw;i+=40){
        let height = RandIntBetween(th/4,th)
        let color = shadeColor("#3344bb",RandIntBetween(-10,10))
        //GameObjectTest.push({x:i,y:th-height,w:(RandIntBetween(20,40)),h:height,c:color})
        rect1(fontCtx,i,th-height,RandInt(64),height,color,2,1)
    }
    var imagea = new Image();
    imagea.src = fontCanvas.toDataURL();
    return imagea;
}
CreateItem=(stroke,color,type,angle=0)=>{
    var fontCanvas = document.createElement('canvas')
    var fontCtx = fontCanvas.getContext('2d')
    fontCanvas.width=fontCanvas.height=64
    let halfh = 32
    fontCtx.translate(halfh,halfh);
    fontCtx.rotate(PI*angle);
    fontCtx.translate(-halfh,-halfh);
    rect1(fontCtx,type.x,type.y,type.w,type.h,color,type.r,stroke)
    fontCtx.setTransform(1, 0, 0, 1, 0, 0);
    var imagea = new Image();
    imagea.src = fontCanvas.toDataURL();
    return imagea;
}
Figure_FrameCreate=(T,Ss=8,stroke=0,S=10)=>{
  var ar=f=[]
  while(Ss>0){
    f=[]
    for(var i=0;i<S;i++){
        //CharacterArray_1(T,Ss,0,i*.2,stroke)
        f.push()
    }
    Ss-=3
    ar.push(f)
  }
  return ar
}
// type 1 
//  {x:64,y:32,w:-64,h:-64,r:32} star 
//  {x:32,y:0,w:0,h:0,r:32}     circle
//  {x:64,y:32,w:-64,h:-32,r:16}   two triangle <>
//  {x:16,y:32,w:32,h:-22,r:7}     long wall
//  {x:32,y:0,w:-32,h:-32,r:32}    rotate wall
//  {x:32,y:16,w:-32,h:-32,r:10}  <^> wall ,many wall
//  {x:64,y:32,w:-64,h:-64,r:30}
// CreateItem(1,"#111",{x:64,y:32,w:-64,h:-64,r:30+i},i*.1))
// CreateItem(1,shadeColor("#faf",i),{x:64,y:32-i,w:-64,h:-64,r:32+i},i*.7
// 
const roe =(a,frames)=>{
    let aasdf = []
    for(var i=0;i<frames;i++){
        aasdf.push(CreateItem(a[0],shadeColor(a[1],i),{
            x:a[2][0]+i*a[3][0],
            y:a[2][1]+i*a[3][1],
            w:a[2][2]+i*a[3][2],
            h:a[2][3]+i*a[3][3],
            r:a[2][4]+i*a[3][4]},i*a[4]))
    }
    return aasdf
}
wallImage = roe([1,"#bb8888",[64,32,-64,-64,32],[0,-1,0,0,1],0],30)
// ---------------------------------------------------------------------
// rotate 
// up to              
// a                 roe([1,"#bb8888",[64,32,-64,-32,32],[0,-1,0,-1,-.1],.1],30)
// long wall         roe([1,"#bb8888",[16,16,32,-32,14],[0,0,0,0,0],.1],30)
// star to circle    roe([1,"#bb8888",[64,32,-64,-64,32],[0,-1,0,0,1],.1],30)
// equl to circle    roe([1,"#bb8888",[32,0,-32,0,32],[0,0,0,0,.1],.1],20)
// iron ball         roe([1,"#bb8888",[64,32,-64,-64,30],[0,0,0,0,0],.1],20)
// fans              roe([1,"#bb8888",[64,0,-64,-64,64],[0,0,0,0,0],.1],10)
// ----------------------------------------------------------------------
// non rotate
// star to big roe([1,"#bb8888",[64,32,-64,-64,32],[0,-1,0,0,1],0],30)
// iron ball shake roe([1,"#bb8888",[64,32,-64,-64,30],[0,0,0,0,0],.5],20)
// wall roe([1,"#bb8888",[16,16,32,-38,16],[0,0,0,0,0],0],1)
resize()
Add()