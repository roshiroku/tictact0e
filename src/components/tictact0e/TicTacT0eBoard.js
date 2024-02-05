import "../../TicTacT0eBoard.css";
import { useContext } from "react";
import TicTacT0eContext from "./TicTacT0eContext";
import classNames from "classnames";
import { Close as X, CircleOutlined as O } from "@mui/icons-material";

const PLAYER_ICONS = [<X fontSize="large" />, <O fontSize="large" />];

export default function TicTacT0eBoard() {
  const { match, tiles, move, endState } = useContext(TicTacT0eContext);

  return (
    <div className="flex flex-col items-center">
      <div
        className="grid gap-1 text-white"
        style={{ gridTemplateColumns: `repeat(${match.size}, auto)` }}
      >
        {tiles.map((tile, i) => (
          <button
            key={i}
            className={classNames(
              "w-[100px] aspect-square border border-current hover:bg-opacity-5 active:border-2 backdrop-blur-sm",
              {
                pulse: tile.value !== undefined,
                "hover:text-tertiary hover:bg-tertiary":
                  tile.value === undefined && match.player === 0,
                "text-tertiary": !endState?.edge?.vertById[tile.id] && tile.value === 0,
                "hover:text-primary hover:bg-primary":
                  tile.value === undefined && match.player === 1,
                "text-primary": !endState?.edge?.vertById[tile.id] && tile.value === 1,
                "text-accent bg-accent bg-opacity-5": !!endState?.edge?.vertById[tile.id],
                "pointer-events-none": tiles[i].value !== undefined || endState,
                "rounded-tl-3xl": i === 0,
                "rounded-tr-3xl": i === match.size - 1,
                "rounded-bl-3xl": i === tiles.length - match.size,
                "rounded-br-3xl": i === tiles.length - 1,
              }
            )}
            disabled={tiles[i].value !== undefined || endState}
            onClick={() => move(i)}
          >
            {PLAYER_ICONS[tile.value]}
          </button>
        ))}
      </div>
    </div>
  );
}
