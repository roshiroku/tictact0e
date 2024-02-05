import VFX from "./VFX";
import Particle from "./Particle";

export default class ParticleEmitter extends VFX {
  #count = 0;
  particles = [];

  /**
   * @param {number} count
   * @param {{ connect?: number; }} settings
   */
  constructor(count, settings) {
    super();
    this.#count = count;
    this.settings = settings;
  }

  addChild(...children) {
    super.addChild(...children);

    for (const child of children) {
      if (child instanceof Particle) {
        this.particles.push(child);
      }
    }
  }

  removeChild(...children) {
    super.removeChild(...children);

    for (const child of children) {
      if (child instanceof Particle) {
        this.particles.splice(this.particles.indexOf(child), 1);
      }
    }
  }

  init() {
    this.removeChild(...this.particles);

    for (let i = 0; i < this.#count; i++) {
      this.addChild(new Particle());
    }

    super.init();
  }

  draw() {
    super.draw();
    if (this.settings.connect) this.connect();
  }

  connect() {
    const ctx = this.ctx;
    const limit = this.settings.connect;

    this.particles.forEach((p1, i) => {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

        if (distance < limit) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255, 255, 255, " + (1 - distance / limit) + ")";
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });
  }
}
