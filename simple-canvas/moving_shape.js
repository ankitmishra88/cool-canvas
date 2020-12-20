let canvas=document.querySelector('#simple_canvas')
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d")




const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
let size=30
let x=Array.from({length: size}, () => Math.floor(Math.random() * innerWidth));
let y=Array.from({length: size}, () => Math.floor(Math.random() *innerHeight));
let dy=Array.from({length: size}, () => Math.floor((Math.random()-0.5)*8)+1);
let dx=Array.from({length: size}, () => Math.floor((Math.random()-0.5)*8)+1);
console.log(x)
let radius=40
  function animate(){
      requestAnimationFrame(animate)
      canvas.width=innerWidth
      canvas.height=innerHeight
      c.clearRect(0,0,innerWidth,innerHeight)
      for(let i=0;i<size;i++){
        c.beginPath()
        let angle=Math.random()*2
        c.arc(x[i],y[i],radius,0,angle*Math.PI,false)
        c.fillStyle=getRandomColor()
        c.fill()
        x[i]+=dx[i]
        y[i]+=dy[i]
        if(x[i]+radius>innerWidth||x[i]-radius<0)
            dx[i]=-dx[i]
        if(y[i]+radius>innerHeight||y[i]-radius<0)
            dy[i]=-dy[i]
        
        
      }
      
      
      
  }
  animate()
