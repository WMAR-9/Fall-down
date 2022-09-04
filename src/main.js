
// basic same variable
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
    UI(delta)
}

MainLoop=_=>{
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    ctx.save()
    ctx.scale(2,2)
    Update()
    ctx.restore()
    requestAnimationFrame(MainLoop)
}

resize()
MainLoop()

