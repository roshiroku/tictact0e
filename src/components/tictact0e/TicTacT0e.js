import { useCallback, useMemo, useState } from "react";
import TicTacT0eHeader from "./TicTacT0eHeader";
import TicTacT0eBoard from "./TicTacT0eBoard";
import TicTacT0eContext, { MIN_SIZE } from "./TicTacT0eContext";
import TicTacT0eMatch from "../../scripts/tictact0e/TicTacT0eMatch";
import TicTacT0eFooter from "./TicTacT0eFooter";

export default function TicTacT0e() {
  const [match, setMatch] = useState(new TicTacT0eMatch(MIN_SIZE));
  const [tiles, setTiles] = useState(match.tiles);
  const [endState, setEndState] = useState(undefined);

  const resetMatch = useCallback((size) => {
    const match = new TicTacT0eMatch(size);
    setMatch(match);
    setEndState(undefined);
    setTiles([...match.tiles]);
  }, []);

  const move = useCallback(
    (tile) => {
      match.move(tile);
      setTiles([...match.tiles]);

      if (match.isTied) setEndState({ tied: true });
      else if (match.winner) setEndState(match.winner);
      else match.nextPlayer();
    },
    [match]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ctx = useMemo(() => ({ match, tiles, endState, resetMatch, move }), [tiles]);

  return (
    <div className="flex flex-col w-full text-white gap-8 my-4">
      <TicTacT0eContext.Provider value={ctx}>
        <TicTacT0eHeader />
        <TicTacT0eBoard />
        <TicTacT0eFooter />
      </TicTacT0eContext.Provider>
    </div>
  );
}
