import React from "react";
import { BiImport } from "react-icons/bi";
function InputConsole({ currentInput, setCurrentInput, getFile }) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#ededed] p-4 flex justify-between">
        <h3 className="font-bold">Input:</h3>
        <label
          htmlFor="inputfile"
          className="flex items-center font-semibold gap-3 cursor-pointer"
        >
          <input
            id="inputfile"
            className="hidden"
            type="file"
            accept="."
            onChange={(e) => getFile(e, setCurrentInput)}
          />
          <BiImport size={"1.5em"} /> Import Input
        </label>
      </div>
      <textarea
        className="h-[calc(50vh_-_4em)] resize-none"
        onChange={(e) => setCurrentInput(e.target.value)}
        value={currentInput}
      />
    </div>
  );
}

export default InputConsole;
