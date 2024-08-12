function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("#1C1C1C");
  fill("#FFFFFF");
  textSize(64);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  let palavra = "fisica e roboica não é legal";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 500, 400);
             
             
             
             
             
             
             
}