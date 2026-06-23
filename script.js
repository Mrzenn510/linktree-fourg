setInterval(()=>{
document.getElementById("clock").innerHTML=new Date().toLocaleTimeString("id-ID");
},1000);

const c=document.getElementById("particles");
const ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let p=[...Array(80)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+1}));
function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="#7c3aed";
p.forEach(i=>{ctx.beginPath();ctx.arc(i.x,i.y,i.r,0,6.28);ctx.fill();i.y+=0.3;if(i.y>c.height)i.y=0;});
requestAnimationFrame(draw);
}
draw();
