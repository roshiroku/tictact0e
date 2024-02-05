import { useContext, useMemo } from "react";
import TicTacT0eContext, { MAX_SIZE, MIN_SIZE } from "./TicTacT0eContext";
import Button from "../inputs/Button";
import Select from "../inputs/Select";

export default function TicTacT0eHeader({ min = MIN_SIZE, max = MAX_SIZE }) {
  const { match, resetMatch } = useContext(TicTacT0eContext);
  const options = useMemo(() => [...new Array(max - min + 1)].map((x, i) => i + min), [min, max]);

  return (
    <div className="flex flex-col text-xl text-center gap-8">
      <h1 className="text-3xl font-medium">Tic-Tac-T0e</h1>
      <div className="flex flex-row items-center justify-center gap-4">
        <label htmlFor="boardSize">Board size</label>
        <div>
          <Select
            id="boardSize"
            className="text-lg text-white active:text-primary uppercase tracking-wide font-medium [&>option]:text-[initial] min-h-[40px] outline-none backdrop-blur-sm"
            color={null}
            secondary
            outlined
            rounded
            defaultValue={match.size}
            onChange={(e) => resetMatch(parseInt(e.target.value))}
          >
            {options.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </Select>
        </div>
        <div>
          <Button
            className="text-lg text-white active:text-primary uppercase tracking-wide font-medium backdrop-blur-sm"
            color={null}
            secondary
            outlined
            rounded
            onClick={() => resetMatch(match.size)}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
