import  { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboard = () => {
  const [input, setInput] = useState("");

  const handleChange = (input) => {
    setInput(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Type here..."
        readOnly
        style={{ marginBottom: "10px", width: "300px", padding: "5px" }}
      />
      <Keyboard onChange={handleChange} />
    </div>
  );
};

export default VirtualKeyboard;
