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
Blink=_=>{
    
}
// UI
UI=_=>{
    // canvas.width = canvas.height = size * unit;
    let w = canvas.width
    let h = canvas.height
    ctx.fillStyle="#F1F"
    ctx.fillRect(0,0,w,h)
}
