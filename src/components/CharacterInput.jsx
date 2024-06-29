import { useState } from "react";

import { sampleNames } from "../utils/TwilightsData";

export default function CharacterInput({ max, setFinalCharacterList }) {
    const [characterList, setCharacterList] = useState(new Array(max));
    const [isFinished, setIsFinished] = useState(false);

    const handleInputChange = (index, event) => {
        let newCharacterList = characterList;
        newCharacterList[index] = event.target.value;
        setCharacterList(newCharacterList);
        console.log(characterList);
    }

    const submit = (e) => {
        for (let i = 0; i < characterList.length; i++) {
            if (characterList[i] == null) {
                alert("Form has errors.");
                return;
            }
        }
        e.preventDefault();
        console.log("SUBMITTED LIST: ");
        console.log(characterList);
        setFinalCharacterList(characterList);
        setIsFinished(true);
    }

    const submitWithSampleNames = () => {
        setFinalCharacterList(sampleNames);
        setIsFinished(true);
    }

    return (
        <div className={(isFinished ? "hidden" : "block")}>
            <form className="grid grid-cols-2 gap-4" onSubmit={submit}>
                {Array.from({ length: max }).map((_, index) => {
                    return (
                        <div key={index} className="p-2 bg-amber-950 rounded-lg">
                            <input 
                                name="name" 
                                className="w-full placeholder:text-center"
                                placeholder="name"
                                value={characterList[index]}
                                onChange={event => handleInputChange(index, event)}
                            />
                        </div>
                    )
                })}
            </form>
            <div className="mt-4 gap-x-4 w-full flex flex-row justify-center">
                <button className="p-4 bg-slate-600 text-white" onClick={submit}>
                    SUBMIT
                </button>
                <button className="p-4 bg-slate-600 text-white" onClick={submitWithSampleNames}>
                    SUBMIT with Sample
                </button>
            </div>
            
        </div>
    )
}
