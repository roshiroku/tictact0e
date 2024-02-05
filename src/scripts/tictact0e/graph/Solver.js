// /**
//  * @typedef {import("./Graph").default} Graph
//  */

// export default class Solver {
//   /**
//    * @param {Graph} graph
//    */
//   constructor(graph) {
//     this.graph = graph;
//   }

//   step(value) {
//     const edgesByPriority = {};
//     const vertsByPriority = {};
//     const vertsById = {};
//     let topEdgePriority = 0;
//     let topVertPriority = 0;

//     for (const edge of this.graph.edges) {
//       const priority = edge.value;

//       if (edge.hasMixedValues) continue;
//       if (!edgesByPriority[priority]) edgesByPriority[priority] = [[], []];

//       const group = edge.isEmpty || edge.values[value] ? 0 : 1;

//       edgesByPriority[priority][group].push(edge);
//       topEdgePriority = Math.max(topEdgePriority, priority);
//     }

//     const edges = edgesByPriority[topEdgePriority];

//     for (const edge of edges[edges[0].length ? 0 : 1]) {
//       for (const vert of edge.verts) {
//         if (vert.value === undefined && !vertsById[vert.id]) {
//           let group = [0, 0];

//           for (const edge of vert.edges) {
//             group[edge.isEmpty || edge.values[value] ? 0 : 1] = 1;
//           }

//           const priority = 10 * vert.edges.length + (group[0] & group[1]);

//           if (!vertsByPriority[priority]) vertsByPriority[priority] = [];

//           vertsById[vert.id] = vert;
//           vertsByPriority[priority].push(vert);
//           topVertPriority = Math.max(topVertPriority, priority);
//         }
//       }
//     }

//     const randomIndex = Math.floor(Math.random() * vertsByPriority[topVertPriority].length);

//     return vertsByPriority[topVertPriority][randomIndex];
//   }
// }
