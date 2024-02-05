export default class VFX {
  /** @type {VFX} */
  #parent;
  /** @type {VFX[]} */
  #children = [];

  /**
   * @returns {HTMLCanvasElement}
   */
  get canvas() {
    return this.parent.canvas;
  }

  /**
   * @returns {CanvasRenderingContext2D}
   */
  get ctx() {
    return this.parent.ctx;
  }

  get parent() {
    return this.#parent;
  }

  get children() {
    return this.#children;
  }

  /**
   * @param  {...VFX} children
   */
  addChild(...children) {
    for (const child of children) {
      child.#parent = this;
      this.children.push(child);
    }
  }

  /**
   * @param  {...VFX} children
   */
  removeChild(...children) {
    for (const child of children) {
      const index = this.children.indexOf(child);

      if (index > -1) {
        this.children.splice(index, 1)[0].#parent = undefined;
      }
    }
  }

  init() {
    this.children.forEach((child) => child.init());
  }

  draw() {
    this.children.forEach((child) => child.draw());
  }
}
