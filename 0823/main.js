//Greta Hachigian-Kreutzer
//0819
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var balls=[];

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    for (i = 0; i <50; i++) {
      let radius = random(10,20);
      let ball = new Ball(
    random(0 + radius,canvas.width - radius),
    random(0 + radius,canvas.height - radius),
    random(-7,7),random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')', radius);
    balls.push(ball);
  }
      animate();
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'rgba(0, 0, 0, 0.25)';
    for(i = 0; i<balls.length; i++){
      balls[i].update();
      balls[i].draw();
      balls[i].checkEdges();
    }
    requestAnimationFrame(animate); // next cycle
}
