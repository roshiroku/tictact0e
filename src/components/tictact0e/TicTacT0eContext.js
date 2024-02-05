/**
 * @typedef {import("../../scripts/tictact0e/TicTacT0eMatch").default} TicTacT0eMatch
 * @typedef {import("../../scripts/tictact0e/graph/Edge").default} Edge
 * @typedef {{ winner?: number; edge?: Edge; tied?: boolean; }} TicTacT0eMatchEnd
 */

import { createContext } from "react";

export const MIN_SIZE = 3;
export const MAX_SIZE = 10;

class TicTacT0eContext {
  /** @type {TicTacT0eMatch} */
  match;

  /** @type {(size: number) => void} */
  resetMatch;

  /** @type {(tile: number) => void} */
  move;

  /** @type {string[]} */
  tiles;

  /** @type {(tiles: string[]) => void} */
  setTiles;

  /** @type {TicTacT0eMatchEnd | undefined} */
  endState;
}

export default createContext(TicTacT0eContext);
