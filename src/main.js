// utils function
// basic same variable
const windows = window
const documents = document
const math=Math
const PI = math.PI
let innerWidth;
Rand=a=>math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>math.hypot(a,b);
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;

localSet=(e,a)=>l.setItem(e,a)
localGet=e=>l.getItem(e)

Continue=_=>{

}

Record=_=>{

}
Set=_=>{

}

let lastUpdate = performance.now();
Update=_=>{
    const now = performance.now();
    const deltaMs = now - lastUpdate;
    const delta = deltaMs / 1000;
    lastUpdate = now;
}
MainLoop=_=>{
    UI()
    
    requestAnimationFrame(MainLoop)
}

// inputs 

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
    if(!e.button)e.pageX>innerWidth/2?key.s=1:key.a=1
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
    canvas.width = size * unit;
    canvas.height = size * unit + 50;
    ctx.imageSmoothingEnabled = false;
    innerWidth=iw
    console.log(innerWidth,canvas.height)
};
onresize=e=>resize()
//window.addEventListener("resize", resize);
resize()
MainLoop()