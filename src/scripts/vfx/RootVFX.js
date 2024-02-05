import VFX from "./VFX";

export default class RootVFX extends VFX {
  /** @type {HTMLCanvasElement} */
  #canvas;
  /** @type {CanvasRenderingContext2D} */
  #ctx;

  active = false;

  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    super();
    this.#canvas = canvas;
    this.#ctx = canvas.getContext("2d");
    this.draw = this.draw.bind(this);
  }

  get canvas() {
    return this.#canvas;
  }

  get ctx() {
    return this.#ctx;
  }

  draw() {
    if (this.active) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      super.draw();
      requestAnimationFrame(this.draw);
    }
  }

  start() {
    if (!this.active) {
      this.active = true;
      this.draw();
    }
  }

  stop() {
    this.active = false;
  }
}
