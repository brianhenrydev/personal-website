import { useState } from "react";
import Banner from "./components/Banner";
import CommandInput from "./components/CommandInput";


function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState(
    <div
      className="flex flex-col text-4xl text-gray-500">
      <span>Welcome to my portfolio!</span>
      <span>(type
        <code
          className="text-green-600"
        >&nbsp;help&nbsp;
        </code>
        to list available commands)
      </span>
    </div>
  );


  return (
    <div className="flex h-screen flex-col bg-gray-800 text-white">
      <Banner />
      <div className="flex-grow overflow-auto p-4">
        {output}
      </div>
      <CommandInput
        command={command}
        setCommand={setCommand}
        setOutput={setOutput}
      />
    </div>
  )
};

export default App;
