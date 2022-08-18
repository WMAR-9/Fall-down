// utils function
Rand=a=>Math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>Math.hypot(a,b);
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

MainLoop=_=>{
    requestAnimationFrame(MainLoop)
}

// inputs 
// Input
window.addEventListener("blur", e => console.log(e));
window.addEventListener("focus", e => console.log(e));

canvasA.addEventListener("mousedown", e => console.log(e));
canvasA.addEventListener("mouseup", e => console.log(e));

canvasA.addEventListener("touchstart", e => console.log(e));
canvasA.addEventListener("touchend", e => console.log(e));

document.addEventListener("keydown", e => {
    if (e.repeat) {
        return;
    }
    if (e.key === " ") {
        console.log(e)
    }
    if (e.key === "Escape") {
        console.log(e)
    } else {
        console.log(e)
    }
});

document.addEventListener("keyup", (e) => {
    if (e.repeat) {
        return;
    }

    if (e.key === " ") {
        input.action = false;
    }
});
MainLoop()