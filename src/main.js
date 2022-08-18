// utils function
Rand=a=>Math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>Math.hypot(a,b);
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;
localSet=(e,a)=>l.setItem(e,a)
localGet=e=>l.getItem(e)

