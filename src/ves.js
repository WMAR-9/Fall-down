class Vector{
    constructor(x,y,w=32,h=32){
      this.x = x
      this.y = y
      this.h= h
      this.w= w
    }
    set(v){
      this.x = v.x
      this.y = v.y
      return this;
    }
    add(v){
      this.x+=v.x
      this.y+=v.y
    }
    addOne(v){
      this.x+=v
      this.y+=v
    }
    zero(){
      this.x=this.y=0
    }
    substract(v){
      this.x -= v.x
      this.y -= v.y
      return this;
    }
    multiply(s){
      let A = s/Distance(this.x,this.y)
      this.x *= A
      this.y *= A
    }
    dot(a){
      this.x*=a
      this.y*=a
      return this
    }
    clone(){
      return new Vector(this.x,this.y,this.w,this.h)
    }
    norm(v){
      let tx = v.x-this.x,ty =v.y-this.y
      let dist = Distance(tx,ty)
      return new Vector(tx/dist,ty/dist)
    }
    outer(w,h){
      return this.x>w||this.y>h
    }
    collisionRect(a){
        return CollisionRect(this,a)
    }
  }