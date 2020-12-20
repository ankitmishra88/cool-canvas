let canvas=document.querySelector('#simple_canvas')
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d")




const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
  
const Circle=function(x,y,radius,dy,dx){
        this.x=x
        this.y=y
        this.dy=dy
        this.dx=dx
        this.radius=radius
        this.angle=2

        this.draw=function(){
          c.beginPath()
          let angle=Math.random()*2
          c.arc(this.x,this.y,this.radius,0,this.angle*Math.PI,false)
          c.fillStyle=getRandomColor()
          c.fill()
          this.update()
        }

        this.update=function(){
          this.x+=this.dx
          this.y+=this.dy
          if(this.x+this.radius>innerWidth||this.x-this.radius<0)
              this.dx=-this.dx
          if(this.y+this.radius>innerHeight||this.y-this.radius<0)
              this.dy=-this.dy
        }
        

    }
let size=100
let circleArr=[]
for(let i=0;i<size;i++){
        let x=Math.random() * innerWidth
        let y=Math.random()*innerHeight
        let dx=(Math.random()-0.5)*8
        let dy=(Math.random()-0.5)*8   
        circleArr.push(new Circle(x,y,20,dx,dy,))  
}
//console.log(x)
let radius=40
  function animate(){
      requestAnimationFrame(animate)
      canvas.width=innerWidth
      canvas.height=innerHeight
      c.clearRect(0,0,innerWidth,innerHeight)
      for(let i=0;i<size;i++){
        circleArr[i].draw()
      }
     
      
      
      
  }
  //Animate function Called
  animate()
