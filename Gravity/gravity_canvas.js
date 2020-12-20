let canvas=document.querySelector('#simple_canvas')
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d")




const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
/*  var mouse={
    x:undefined,
    y:undefined
  }
  //Event Listener On Mouse Move
  window.addEventListener('mousemove',function(event){
      mouse.x=event.clientX
      mouse.y=event.clientY
  })*/
  let gravity=0.5
  let frictionY=0.99
  let frictionX=0.8
  
const Circle=function(x,y,radius,dy,dx,blinkrad=false){
        this.x=x
        this.y=y
        this.dy=dy
        this.dx=dx
        this.radius=radius
        this.angle=2
        this.blinkrad=blinkrad

        this.draw=function(){
          c.beginPath()
          let angle=Math.random()*2
          c.arc(this.x,this.y,this.radius,0,this.angle*Math.PI,false)
          c.fillStyle=getRandomColor()
          c.fill()
          
        }
        this.update=function(){
          this.x=mouse.x
          this.y=mouse.y
          this.draw()
        }

        this.move=function(){
          //this.radius=Math.random()*20
          
          if(this.x+this.radius>innerWidth||this.x-this.radius<0)
              this.dx=-this.dx*frictionX
          if(this.y+this.radius>canvas.height){
              this.dy=-this.dy*frictionY;
          }
          else{
              this.dy+=gravity
          }
          this.x+=this.dx
          this.y+=this.dy
          this.draw()
          
          
        }
        this.blink=function(){
          if(this.blinkrad){
            this.radius=Math.random()*this.blinkrad
          }
        }
        

    }
let size=100
let circleArr=[]
for(let i=0;i<size;i++){
        let x=Math.random() * innerWidth
        let y=Math.random()*innerHeight
        let dx=(Math.random()-0.5)*2
        let dy=(Math.random()-0.5)*2   
        circleArr.push(new Circle(x,y,20,dx,dy,20))  
}
  let cursor=new Circle(innerWidth/2,innerHeight/2,100,0,0,100)
  function animate(){
      requestAnimationFrame(animate)
      canvas.width=innerWidth
      canvas.height=innerHeight
      c.clearRect(0,0,innerWidth,innerHeight)
      for(let i=0;i<size;i++){
        circleArr[i].move()
        circleArr[i].blink()
      }
      cursor.update()
      cursor.blink()
     
      
      
      
  }
  //Animate function Called
  animate()
