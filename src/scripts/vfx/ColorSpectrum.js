import VFX from "./VFX";

export default class ColorSpectrum extends VFX {
  factor = 0;
  colors = [];
  current = 0;
  next = 1;

  static linearGradient(x1, y1, x2, y2) {
    return (/** @type {CanvasRenderingContext2D} */ ctx) => {
      const { width, height } = ctx.canvas;
      return ctx.createLinearGradient(x1 * width, y1 * height, x2 * width, y2 * height);
    };
  }

  static radialGradient(x1, y1, r1, x2, y2, r2) {
    return (/** @type {CanvasRenderingContext2D} */ ctx) => {
      const { width, height } = ctx.canvas;
      const r = Math.max(width, height) / 2;

      return ctx.createRadialGradient(
        x1 * width,
        y1 * height,
        r1 * r,
        x2 * width,
        y2 * height,
        r2 * r
      );
    };
  }

  constructor(
    colors,
    settings = { speed: 0.001, gradient: ColorSpectrum.linearGradient(0, 0, 0, 1) }
  ) {
    super();
    this.colors = colors;
    this.settings = settings;
  }

  draw() {
    const { width, height } = this.canvas;
    const { speed } = this.settings;
    const gradient = this.settings.gradient(this.ctx);
    const current = this.colors[this.current];
    const next = this.colors[this.next];
    const colorA = lerpColor(current, next, this.factor);
    const colorB = lerpColor(current, next, Math.min(1, 2 * this.factor));

    gradient.addColorStop(0, colorA);
    gradient.addColorStop(1, colorB);

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, width, height);

    this.factor += speed;

    if (this.factor >= 1) {
      this.factor = 0;
      this.current = (this.current + 1) % this.colors.length;
      this.next = (this.current + 1) % this.colors.length;
    }
  }
}

function lerpColor(a, b, amount) {
  const ah = parseInt(a.replace(/#/g, ""), 16);
  const ar = ah >> 16;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;
  const bh = parseInt(b.replace(/#/g, ""), 16);
  const br = bh >> 16;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;
  const rr = (ar + amount * (br - ar)) & 0xff;
  const rg = (ag + amount * (bg - ag)) & 0xff;
  const rb = (ab + amount * (bb - ab)) & 0xff;

  return "#" + ((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1);
}
