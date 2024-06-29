import { useState } from "react";

import { TwilightsData } from "../utils/TwilightsData";

export default function TwilightSequence({ finalCharacterList, setFinishGame }) {
    const [characterList, setCharacterList] = useState(finalCharacterList);
    const [twilightNumber, setTwilightNumber] = useState(1);
    const [displayEndMessage, setDisplayEndMessage] = useState(false);

    const progressTwilight = (e) => {
        e.preventDefault();
        let characterListCopy = characterList.slice();

        const noOfDeaths = TwilightsData[twilightNumber - 1]["noDeaths"];
        characterListCopy.sort(() => Math.random() - 0.5).splice(0, noOfDeaths);
        setCharacterList(characterListCopy)
        if (twilightNumber <= 9) {
            setTwilightNumber(twilightNumber + 1);
        } else {
            setTwilightNumber(10);
            setFinishGame(true);
            setDisplayEndMessage(true);
        }

    }


    return (
        <div className="flex justify-center">
            <div className={"flex-col self-center " + ((characterList.length > 0) ? "flex" : "hidden")}>
                <div className="flex gap-x-4 mb-4 w-screen flex-wrap justify-center">
                    {characterList.map((i) => {
                        return(<span
                            key={i}
                            className="p-4 bg-slate-600 text-white rounded-sm"
                        >
                            {i}
                        </span>)
                        
                    })}
                </div>
                <button
                    className="p-4 bg-slate-600 text-white mx-14"
                    onClick={progressTwilight}
                >
                    progress the twilight, no: {twilightNumber}, length: {characterList.length}
                </button>

            </div>
            <div className={"text-9xl font-bebasneue font-bold text-yellow-600 " + (displayEndMessage ? "block" : "hidden")}>
                the golden land is open
            </div>
        </div>

    )
}