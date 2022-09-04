const windows = window
const documents = document
const math=Math
const PI = math.PI

Rand=a=>math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>math.hypot(a,b);
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;
IntToString=a=>a.toString()
Pad=a=>a.padStart(4,"0");

// UI frame size
let innerWidth,canvasWidth,canvasHeight,rect;


// inputs controls
let key= {},key1={}
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
        console.log(x,y)
        key1.m=!key1.m
        key1.r=!key1.r
        key1.p=!key1.p
    }
    console.log("onmousedown and up",key)
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
    console.log(innerWidth,canvas.height)
};
onresize=e=>resize()

