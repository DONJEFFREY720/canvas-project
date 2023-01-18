canvas =document.getElementById("mycavas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth=5;
ctx.arc(100,150,40,0,2*Math.PI)
ctx.stroke()
