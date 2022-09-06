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
console.log(sdfsdf.A)
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
EmojiToImage=(str)=>{
    
}
CreateObject=_=>{
    var fontCanvas = document.createElement('canvas')
    var fontCtx = GetContext(fontCanvas),ww,hh
    ww=hh=fontCanvas.width=fontCanvas.height=32
    fontCtx.scale(2,2)
    fontCtx.fillStyle="#111"
    fontCtx.fillRect(0,0,ww,hh)
    ww = ww/6,hh=hh/6
    let x=y=c=0,oldWidth=0
    for(var i=0;i<9;i++){
        fontCtx.fillStyle="#a88"
        let tt= RandInt(ww/2)
        fontCtx.fillRect(x+oldWidth,y,ww+tt,hh)
        //fontCtx.strokeRect(x+oldWidth,y,ww+tt,hh)
        oldWidth=tt
        if(c==2){
            y+=hh
            x=0
            c=0
        }else{
            x+=ww
            c++
        }
    }
    var imagea = new Image();
    imagea.src = fontCanvas.toDataURL();
    return imagea;
}
let wallImage= CreateObject()
console.log(wallImage)
GameObject=[]
AddOneLine=()=>{
    //let tw = canvasWidth/2,th=canvasHeight/2
    //tw/32
    GameObject.push()
}
Add=()=>{
    //let tw = canvasWidth/2,th=canvasHeight/2
    //tw/32
    let tw = 250,th=250
    for(let j =0;j<th/32;j++){
        for (let i = 0; i < tw/32; i++) {
            // 
            GameObject.push({
                x:64*i,
                y:64*j,
                img:CreateObject()
            })
        }
    }
}
Add()
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
    //ctx.strokeRect(tw/2-tempSize/2,th/4,tempSize,tempSize)
    ctx.moveTo(tw/4,0)
    ctx.lineTo(0,th)
    ctx.lineTo(tw,th)
    ctx.lineTo(tw/2+tw/4,0)
    ctx.fill()
    //ctx.stroke()
    ctx.clip()
    //ctx.drawImage(wallImage,200,80,32,32)
    GameObject.forEach(e=>{
        ctx.drawImage(e.img,e.x,e.y,64,64)
        e.y-=ms*10
    })
    ctx.strokeRect(tw/2-tempSize/2,th/4,tempSize,tempSize)
    // GameObject.forEach(e=>{
        
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
    //         GameObject.splice(GameObject.indexOf(e),1)
    //     }
    //     //console.log("here")
    // })
    // if(!GameObject.length)Add()
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
    ctx.fillStyle="#0077B6"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    //GoAlpha>=2?0:FadeIn(ms)
    ctx.save()
    
    //MainGame(ms)
    // **************************************************
    ctx.font="15px Impact"
    ctx.fillStyle="#fff"
    
    
    let tw=canvasWidth/2,th=canvasHeight/2,ci=1
    let firstLineY=20,secondLineY=80,sizeW=100
    for(var k in keyStopRestartMute){
        ctx.globalCompositeOperation = "lighten"
        ctx.globalAlpha = Max(key1[keyStopRestartMute[k]],.5)
        let x = tw-22*ci-5,y=firstLineY,h=12,w=18
        resizeWindow?0:checkButton.push({x,y:y-10,w,h})
        ctx.fillText(ci-1?ci-2?"⏯️":"🎧":"🏠",x,y)
        ci++
    }
    resizeWindow=1
    ctx.restore()
    ctx.save()
    ctx.fillStyle="#fff"
    ctx.drawImage(sdfsdf.E,80,50,64,64)
    ctx.drawImage(sdfsdf.E,80,50,64,64)
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
    ctx.globalCompositeOperation="exclusion"
    rect1(ctx,25,th/2+adf,2,2,"#b88",2,1)
    adf += 1
    adf = Min(sizeW,adf)
    ctx.restore()
}

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
background1=(x,y,x1,y2)=>{

}