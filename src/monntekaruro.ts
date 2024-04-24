const kaisuu=100000000
let naka=0
let x=0
let y=0
for (let i=0 ;i<=kaisuu ;i++){
  x=  Math.random()
  y= Math.random()
  if(x*x+y*y<=1){
    naka=naka+1
  }
}
console.log(4*naka/kaisuu)