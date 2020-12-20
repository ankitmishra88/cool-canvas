let canvas=document.querySelector('#simple_canvas')
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d")




const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
  var mouse={
    x:undefined,
    y:undefined
  }
  //Event Listener On Mouse Move
  window.addEventListener('mousemove',function(event){
      mouse.x=event.clientX
      mouse.y=event.clientY
  })

const getDistance=function(x1,y1,x2,y2){

      return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))

}
  
const Circle=function(x,y,radius,dy,dx,color=false,blinkrad=false){
        this.x=x
        this.y=y
        this.dy=dy
        this.dx=dx
        this.radius=radius
        this.angle=2
        this.blinkrad=blinkrad
        this.color=color?color:'white'

        this.draw=function(){
          c.beginPath()
          let angle=Math.random()*2
          c.arc(this.x,this.y,this.radius,0,this.angle*Math.PI,false)
          c.fillStyle=this.color
          c.fill()
          
          
        }
        this.update=function(dis){
          if(dis>=0&&mouse.x+this.radius<=innerWidth&&mouse.y+this.radius<=innerHeight&&mouse.x-this.radius>=0&&mouse.y-this.radius>=0){
          this.x=mouse.x
          this.y=mouse.y
          }
          this.draw()
        }

        this.move=function(dist){
          //this.radius=Math.random()*20
          this.x+=this.dx
          this.y+=this.dy
          if(this.x+this.radius>innerWidth||this.x-this.radius<0||dist<0)
              this.dx=-this.dx
          if(this.y+this.radius>innerHeight||this.y-this.radius<0||dist<0)
              this.dy=-this.dy
          this.draw()
        }
        this.blink=function(){
          if(this.blinkrad){
            this.radius=Math.random()*this.blinkrad
          }
        }
        

    }
let size=100
/*let circleArr=[]
for(let i=0;i<size;i++){
        let x=Math.random() * innerWidth
        let y=Math.random()*innerHeight
        let dx=(Math.random()-0.5)*8
        let dy=(Math.random()-0.5)*8   
        circleArr.push(new Circle(x,y,20,dx,dy,20))  
}*/
let obj1=new Circle(innerWidth/2,innerHeight/2,200,1,1)
  let cursor=new Circle(undefined,undefined,100,0,0)
  function animate(){
      requestAnimationFrame(animate)
      canvas.width=innerWidth
      canvas.height=innerHeight
      c.clearRect(0,0,innerWidth,innerHeight)
      /*for(let i=0;i<size;i++){
        circleArr[i].move()
        circleArr[i].blink()
      }*/
      let dist=getDistance(obj1.x,obj1.y,mouse.x,mouse.y)-obj1.radius-cursor.radius
      if(dist<0){
        obj1.color='red'
      }
      else{
        obj1.color='white'
      }
      cursor.update(dist)
      obj1.move(dist)
      //console.log(dist)
      
     // console.log(obj1)
      //cursor.blink()
     
      
      
      
  }
  //Animate function Called
  animate()
