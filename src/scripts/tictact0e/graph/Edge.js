/**
 * @typedef {import("./Vertex").default} Vertex
 */

export default class Edge {
  #empty = {};
  vertById = {};
  values = {};
  value = 0;

  /**
   * @param {Vertex[]} verts
   */
  constructor(verts) {
    this.verts = verts;

    for (const vert of verts) {
      vert.edges.push(this);
      this.vertById[vert.id] = vert;
      this.onValueChange(vert.id, vert.value);
    }
  }

  get length() {
    return this.verts.length;
  }

  get isEmpty() {
    return !this.value;
  }

  get isFull() {
    return this.value === this.length;
  }

  get hasMixedValues() {
    return Object.keys(this.values).length > 1;
  }

  get empty() {
    return Object.values(this.#empty);
  }

  onValueChange(id, value) {
    const vert = this.vertById[id];

    if (vert.value !== undefined) {
      if (this.values[vert.value] === 1) delete this.values[vert.value];
      else this.values[vert.value]--;
      this.value--;
    }

    if (value === undefined) {
      this.#empty[id] = vert;
    } else {
      this.values[value] = (this.values[value] ?? 0) + 1;
      this.value++;
      delete this.#empty[id];
    }
  }
}
