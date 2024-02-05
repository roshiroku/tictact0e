import VFX from "./VFX";

export default class Particle extends VFX {
  init() {
    super.init();
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.radius = Math.random() * 5 + 1;
    this.color = "rgba(255, 255, 255, " + Math.random() + ")";
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
  }

  draw() {
    super.draw();
    const ctx = this.ctx;
    const { width, height } = this.canvas;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Update particle position
    this.x += this.speedX;
    this.y += this.speedY;

    // Reflect particles off edges
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
}
