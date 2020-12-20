let canvas=document.querySelector('#simple_canvas')
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d")
//Rectangle
c.fillStyle="#00bcd5"
c.fillRect(100,100,100,100)
c.fillStyle="green"
c.fillRect(400,100,100,100)

//Line
c.beginPath()
c.moveTo(50,100)
c.lineTo(300,200)
c.lineTo(200,400)
screen.strokeStyle="#00bcd9"
c.stroke()

//Arc -> Circle
c.beginPath()
c.arc(100,100,40,0,270,false)
c.fill()

c.beginPath()
c.arc(200,100,40,0,90,false)
c.stroke()

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

for(let i=0;i<1000;i++){
    let x=Math.random()*window.innerWidth
    let y=Math.random()*window.innerHeight
    c.beginPath()
    c.arc(x,y,40,0,270,false)
    c.fillStyle=getRandomColor()
    c.fill()
}