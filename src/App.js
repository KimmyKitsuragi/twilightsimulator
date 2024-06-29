import { useState } from "react";

import CharacterInput from "./components/CharacterInput";
import TwilightSequence from "./components/TwilightSequence";

function App() {
  const [finalCharacterList, setFinalCharacterList] = useState([])
  const [finishGame, setFinishGame] = useState(false)

  return (
    <div className="bg-white">
      <div className="p-16 ">
        <CharacterInput max={18} setFinalCharacterList={setFinalCharacterList}/>
      </div>
      <div>
        <TwilightSequence key={finalCharacterList.length} finalCharacterList={finalCharacterList} setFinishGame={setFinishGame}/>
      </div>
    </div>
  );
}

export default App;
