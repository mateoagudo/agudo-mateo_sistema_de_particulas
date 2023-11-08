let sistema = [];
// let col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // p = new Particula();
  // col = color(random(50, 200), 50, random(200, 255), 70);
}

function draw() {
  // if (!p.estaMuerta) {
  //   p.update();
  //   p.display();
  // }
  background(0, 50);
  let p = new Particula();
  sistema.push(p);

  for (let i = 0; i < sistema.length; i++) {
    if (sistema[i].estaMuerta) {
      sistema.splice(i, 1);
    }
  }

  for (let i = 0; i < sistema.length; i++) {
    sistema[i].update();
    sistema[i].display();
  }
}

// function mousePressed() {
//   for (let i = 0; i < 10; i++) {
//     let p = new Particula(col);
//     sistema.push(p);
//   }
// }
