import TicTacT0eSolver from "./TicTacT0eSolver";
import Graph from "./graph/Graph";

export const PLAYERS = ["X", "O"];

export default class TicTacT0eMatch {
  #winner;
  #mixedEdgeCount = 0;

  /**
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.player = 0;
    this.moves = [];
    this.graph = new Graph(size);
    this.solver = new TicTacT0eSolver(this.graph);
  }

  get winner() {
    return this.#winner;
  }

  get isTied() {
    return this.#mixedEdgeCount === this.graph.edges.length;
  }

  get isOver() {
    return !!(this.winner && !this.isTied);
  }

  get tiles() {
    return this.graph.verts;
  }

  get playerSymbol() {
    return PLAYERS[this.player];
  }

  /**
   * @param {number} i
   */
  getRow(i) {
    return this.graph.rows[i].verts;
  }

  /**
   * @param {number} i
   */
  getCol(i) {
    return this.graph.cols[i].verts;
  }

  /**
   * @param {number} i
   */
  getDiagonal(i) {
    return this.graph.diagonals[i].verts;
  }

  nextPlayer() {
    this.player ^= 1;
    return this;
  }

  getMove() {
    const id = this.solver.step(this.player).id;
    return id;
  }

  /**
   * @param {number} id
   */
  move(id) {
    const tile = this.tiles[id];

    if (!this.isOver && tile && tile.value === undefined) {
      tile.value = this.player;
      this.moves.push(tile);

      for (const edge of tile.edges) {
        if (edge.hasMixedValues) {
          if (edge.values[tile.value] === 1) this.#mixedEdgeCount++;
        } else if (edge.isFull) this.#winner = { edge, winner: edge.values[0] ? 0 : 1 };
      }
    }

    return this;
  }

  undo() {
    if (this.moves.length) {
      const tile = this.moves.pop();

      for (const edge of tile.edges) {
        if (edge.hasMixedValues && edge.values[tile.value] === 1) this.#mixedEdgeCount--;
      }

      tile.value = undefined;
      this.#winner = undefined;
    }

    return this;
  }
}
