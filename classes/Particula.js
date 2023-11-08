class Particula {
  constructor() {
    this.tamanoInicial = random(25, 75);
    this.tamano = this.tamanoInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(200, 300));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(0, random(3, 5));
    this.vel.rotate(random(90, 270));

    this.acel = createVector(random(-0.1, 0.1), -0.03);
    this.color = color(255, random(100, 200), 50, 10);
    this.exp = color(random(50, 200), 50, random(200, 255), 70);
  }
  // Metodo ==> method update
  update() {
    this.vel.add(this.acel);
    this.pos.add(this.vel);

    this.tamano = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      300,
      this.tamanoInicial
    );

    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      noFill();
      stroke(this.exp);
      circle(this.pos.x, this.pos.y, this.tamanoInicial);
    }
  }

  // Metodo ==> method display
  display() {
    fill(255, 5);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tamano);
  }
}
