class Particula {
  constructor() {
    this.tamanoInicial = random(10, 50);
    this.tamano = this.tamanoInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(10, 100));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(0, random(3, 5));
    this.vel.rotate(random(180));

    this.acel = createVector(0, -0.01);
    this.color = color(255, random(100, 200), 50, 50);
  }
  // Metodo ==> method update
  update() {
    this.vel.add(this.acel);
    this.pos.add(this.vel);

    this.tamano = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      0,
      this.tamanoInicial
    );

    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
    }
  }

  // Metodo ==> method display
  display() {
    fill(this.color);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tamano);
  }
}
