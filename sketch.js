//Logistic map bifurcation explorer
// expanding on the topics from chapter 2 introduction to complexity

let mouseR
let graph;
function setup() {
  createCanvas(600, 400);
  background(0);
  stroke(255);
  biDi();
  graph = createGraphics(300,160);
  graph.clear();
  showgraph(2);
}
 
function draw(){
 mR = constrain(mouseX, 0, 600)
 mouseR = map(mR,0,600,2.8,4)
 showgraph(mouseR);

}

function biDi(){
  let x=0.2;
  background(0);
  stroke(0,200,0,200);
  
  for (let r = 2.8; r<4; r+=0.00001){
     let x2 = r*(x - x**2);  // x2 is next x Using the same equation as introduction to complexity
      let y = map(x2, 0, 1, height, 0); // map the values for plotting
      let px = map(r,2.8,4,0,width);
      point(px,y);
      
      x = x2;
    
  }

}

  function showgraph(r){
  let x=0.2;
  graph.background(0);
  graph.noFill();
  graph.stroke(255);
  graph.beginShape();
  //r = rSlider.value();
  graph.text(`R value ${r.toFixed(3)}`,10,10);
    for(let t = 0; t< graph.width; t+=10){
      let x2 = r*(x - x**2);  // x2 is next x Using the same equation as introduction to complexity
      y = map(x2, 0, 1, graph.height, 0); // map the values for plotting
      
      
      graph.vertex(t,y);
      
      
      x = x2;
      
     
      
      
    }
  graph.endShape();
  image(graph,0,height-160)
}
  