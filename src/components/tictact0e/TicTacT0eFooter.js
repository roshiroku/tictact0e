import { useContext } from "react";
import TicTacT0eContext from "./TicTacT0eContext";
import Button from "../inputs/Button";
import classNames from "classnames";
import { Close as X, CircleOutlined as O } from "@mui/icons-material";

const PLAYER_ICONS = [<X className="text-tertiary" />, <O className="text-primary" />];

export default function TicTacT0eFooter() {
  const { match, move, endState } = useContext(TicTacT0eContext);

  return (
    <div className="flex flex-col text-xl gap-8">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex flex-row items-end gap-2">
          {endState?.tied && "Match Tied"}
          {endState?.winner !== undefined && (
            <>
              {PLAYER_ICONS[endState.winner]}
              <span>wins</span>
            </>
          )}
          {endState === undefined && (
            <>
              {PLAYER_ICONS[match.player]}
              <span>turn</span>
            </>
          )}
        </div>
        <div>
          <Button
            className={classNames(
              "text-lg text-white active:text-primary uppercase tracking-wide font-medium backdrop-blur-sm",
              { "border-white border-opacity-25": !!endState }
            )}
            color={null}
            secondary
            outlined
            rounded
            disabled={!!endState}
            onClick={() => move(match.getMove())}
          >
            Auto
          </Button>
        </div>
      </div>
    </div>
  );
}
