// CANVAS CODE
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// GLOBAL VARIABLES 
let x = document.getElementById("locationx")
let y = document.getElementById("locationy")
let size = document.getElementById("size")
let circle = document.getElementById("circles")

// DRAWING
// Draw Background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, cnv.width, cnv.height);

ctx.lineWidth = 3;
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.arc(400, 400, 50, 0, 2 * Math.PI)
ctx.stroke();

window.addEventListener("load", draw);

function draw() {


  x.addEventListener("input", change)
  y.addEventListener("input", change)
  size.addEventListener("input", change)
  circle.addEventListener("input", change)


    function change(){
        let cirx = +x.value
        let ciry = +y.value
        let cirsize = +size.value
        let cirnum = +circle.value

        // DRAWING
        // Draw Background
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, cnv.width, cnv.height);

        ctx.lineWidth = 3;
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.arc(cirx, ciry, cirsize, 0, 2 * Math.PI)
        ctx.stroke();

        for (let n=1; n < cirnum; n++){
        cirsize =  cirsize - 10
        ctx.lineWidth = 3;
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.arc(cirx, ciry, cirsize, 0, 2 * Math.PI)
        ctx.stroke();
        }
      }  
  
  

  
  


  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}