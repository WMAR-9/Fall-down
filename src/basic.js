const windows = window
const documents = document
const math=Math
const PI = math.PI
//       var minX1 = this.x,
//         maxX1 = this.x+this.w,
//         minX2 = a.x,
//         maxX2 = a.x+a.w;
//       var minY1 = this.y,
//         maxY1 = this.y+this.h,
//         minY2 = a.y,
//         maxY2 = a.y+a.h;
//       if (maxX1 > minX2 && maxX2 > minX1 &&
//         maxY1 > minY2 && maxY2 > minY1)
Rand=a=>math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>math.hypot(a,b);
CollisionRect=(a,b)=>(a.x+a.w>b.x&&b.x+b.w>a.x&&a.y+a.h>b.y&&b.y+b.h>a.y)?1:0
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;
IntToString=a=>a.toString()
Pad=a=>a.padStart(4,"0");
SlopeY=(a,b,k=-20)=>a*k+b
localSet=(e,a)=>l.setItem(e,a)
localGet=e=>l.getItem(e)

GetCanvas=a=>documents.getElementById(a)
GetContext=a=>a.getContext('2d',{
    alpha: false,
    desynchronized: true
})


// UI frame size
let innerWidth,canvasWidth,canvasHeight,rect,resizeWindow;
let GameObject=[]
let canvas = GetCanvas('a')
let ctx = GetContext(canvas)

// inputs controls
let key= {},key1={},checkButton=[]
let keyStopRestartMute=['r','m','p']
keyStopRestartMute.forEach(e=>key1[e]=0)
console.log(key1)

InitailLoopDict=(k,initialValue)=>{
    for (const i in k)k[i]=initialValue
    return k
}
onblur=onfocus=e=>key1=InitailLoopDict(key1,e.type=="blur"?0:1)

onmousedown=e=>{
    // let as = e.button==0?e.type=="mouseup"?"b":"a":"c"
    if(!e.button){
        e.pageX>innerWidth/2?key.s=1:key.a=1
        let x= e.clientX - rect.left
        let y = e.clientY - rect.top
        let h=w=1
        console.log(x/2,y/2)
        checkButton.forEach((e,i)=>{
            if(CollisionRect(e,{x:x/2,y:y/2,w,h})){
                key1[keyStopRestartMute[i]]=!key1[keyStopRestartMute[i]]
                console.log("onmousedown and up",key1)
            }
            console.log("onmousedown",CollisionRect(e,{x:x/2,y:y/2,w,h}))
        })
    }
    console.log("onmousedown and up",checkButton[0])
    console.log("onmousedown and up",key1)
}
onmouseup=e=>!e.button?key=InitailLoopDict(key,0):0;
ontouchstart=e=>{
    var x = e.changedTouches[0].pageX;
    if(x>innerWidth/2){
        key.s=1
        console.log("left")
    }else{
        key.a=1
        console.log("right")
    }
    console.log(key)
}

ontouchend=e=>key=InitailLoopDict(key,0);

// p:pause , R:restart , M:mute sound

onkeydown=e=>{
    let i = e.key
    if(keyStopRestartMute.includes(i))key1[i]=!key1[i]
    else key[i]=1;
    console.log("keydown",key)
    console.log("mrp",key1)
}
onkeyup=e=>{
    key[e.key]=0
    if(e.key=="i"){
        console.log("STOP")
    }
    console.log("key up",key)
}

// Canvas resizing
const resize = () => {
    const unit = 32,iw=windows.innerWidth,ih=windows.innerHeight;
    const size = Min((Min(iw, ih) / unit)|0, 24);
    canvasWidth=canvas.width = size * unit;
    canvasHeight=canvas.height = size * unit + size*4;
    ctx.imageSmoothingEnabled = false;
    innerWidth=iw
    rect = canvas.getBoundingClientRect();
    checkButton=[]
    resizeWindow=0
};
onresize=e=>resize()
resize()