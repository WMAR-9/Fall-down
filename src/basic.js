const windows = window
const documents = document
const math=Math
const PI = math.PI
let innerWidth,canvasWidth,canvasHeight;
Rand=a=>math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>math.hypot(a,b);
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;
