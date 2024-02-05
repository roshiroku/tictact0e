/**
 * @typedef {import("../../scripts/tictact0e/TicTacT0eMatch").default} TicTacT0eMatch
 * @typedef {{ winner?: number; row?: number; col?: number; diag?: number; tied?: boolean; }} TicTacT0eMatchEnd
 */

import { createContext } from "react";

export const MIN_SIZE = 3;
export const MAX_SIZE = 10;

class TicTacT0eContext {
  // size = MIN_SIZE;

  // /** @type {(size: number) => void} */
  // setSize;

  // player = 0;

  // /** @type {(player: number) => void} */
  // setPlayer;

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

  // /** @type {(state: TicTacT0eMatchEnd | undefined) => void} */
  // setEndState;
}

export default createContext(TicTacT0eContext);
