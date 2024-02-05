/**
 * @typedef {import("./Edge").default} Edge
 */

export default class Vertex {
  #value;

  /** @type {Edge[]} */
  edges = [];

  /**
   * @param {number} id
   */
  constructor(id) {
    this.id = id;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    if (value === this.value) return;

    for (const edge of this.edges) {
      edge.onValueChange(this.id, value);
    }

    this.#value = value;
  }
}
