/**
 * @typedef {import("./graph/Graph").default} Graph
 * @typedef {import("./graph/Edge").default} Edge
 */

export default class TicTacT0eSolver {
  /**
   * @param {Graph} graph
   */
  constructor(graph, tunnelVision = 0.5) {
    this.graph = graph;
    this.priority = [1 + tunnelVision, 1];
  }

  /**
   * @param {Number} value
   */
  step(value) {
    /** @type {{ [priority: number]: [Edge[], Edge[]] }} */
    const edgesByPriority = {};
    /** @type {{ [priority: number]: Vertex[] }} */
    const vertsByPriority = {};
    /** @type {{ [id: number]: Vertex }} */
    const vertsById = {};
    let maxEdgePriority = 0;
    let maxVertPriority = 0;

    for (const edge of this.graph.edges) {
      if (edge.hasMixedValues) continue;

      const priority = edge.value;
      const group = edge.isEmpty || edge.values[value] ? 0 : 1;

      if (!edgesByPriority[priority]) edgesByPriority[priority] = [[], []];

      edgesByPriority[priority][group].push(edge);
      maxEdgePriority = Math.max(maxEdgePriority, priority);
    }

    const edges = edgesByPriority[maxEdgePriority];

    for (const edge of edges[edges[0].length ? 0 : 1]) {
      for (const vert of edge.verts) {
        if (vert.value === undefined && !vertsById[vert.id]) {
          const priority = vert.edges.reduce(
            (sum, e) => sum + (e.hasMixedValues ? 0 : e.value + 1),
            0
          );

          if (!vertsByPriority[priority]) vertsByPriority[priority] = [];

          vertsById[vert.id] = vert;
          vertsByPriority[priority].push(vert);
          maxVertPriority = Math.max(maxVertPriority, priority);
        }
      }
    }

    const randomIndex = Math.floor(Math.random() * vertsByPriority[maxVertPriority].length);

    return vertsByPriority[maxVertPriority][randomIndex];
  }
}
