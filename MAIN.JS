var mouseEvent=""
var sourceX=""
var sourceY=""
var color=""
var radius=""
var width=""
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
color = "black";
canvas.addEventListener("mouseDown",mymousedown)
function mymousedown(e){
mouseEvent="mouseDown"
document.getElementById("color_input").value=color_input
document.getElementById("width_input").value=width_input
document.getElementById("radius_input").value=radius_input
}
canvas.addEventListener("mouseUp",mymouseup)
function mymouseup(e){
mouseEvent="mouseUp"
}
canvas.addEventListener("mouseLeave",mymouseleave)
function mymouseleave(e){
mouseEvent="mouseLeave"
}

canvas.addEventListener("mouseMove",mymousemove)
function mymousemove(e){
   destX=e.clientX-canvas.offsetLeft
   destY=e.clientY-canvas.offsetTop
   if (mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=2;
       ctx.moveTo(sourceX,sourceY)
       ctx.lineTo(destX,destY)
     ctx.stroke()
    ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
   
   }
   sourceX=destX
   sourceY=destY
}