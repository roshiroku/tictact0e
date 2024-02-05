import Edge from "./Edge";
import Vertex from "./Vertex";

export default class Graph {
  /**
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.verts = [];
    this.rows = [];
    this.cols = [];
    this.edges = [];

    for (let i = 0; i < size ** 2; i++) {
      this.verts.push(new Vertex(i));
    }

    for (let i = 0; i < size; i++) {
      const row = [];
      const col = [];

      for (let j = 0; j < size; j++) {
        row.push(this.verts[i * size + j]);
        col.push(this.verts[j * size + i]);
      }

      this.rows.push(new Edge(row));
      this.cols.push(new Edge(col));
    }

    const diag1 = [];
    const diag2 = [];

    for (let i = 0; i < size; i++) {
      diag1.push(this.verts[i * (size + 1)]);
      diag2.push(this.verts[(i + 1) * (size - 1)]);
    }

    this.diagonals = [new Edge(diag1), new Edge(diag2)];
    this.edges = [...this.rows, ...this.cols, ...this.diagonals];
  }
}
