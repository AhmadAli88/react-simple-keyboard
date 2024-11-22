import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const NumericKeyboard = () => {
  const [input, setInput] = useState("");

  const numericLayout = {
    default: ["1 2 3", "4 5 6", "7 8 9", "0 {backspace}"]
  };

  const handleChange = (input) => {
    setInput(input);
  };

  const handleKeyPress = (button) => {
    if (button === "{backspace}") {
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Numeric Keyboard</h2>
      <input
        type="text"
        value={input}
        placeholder="Type here..."
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      />
      <Keyboard
        layout={numericLayout}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        display={{
          "{backspace}": "⌫ Backspace"
        }}
        buttonTheme={[
          {
            class: "hg-button-special",
            buttons: "{backspace}"
          }
        ]}
      />
      <style>
        {`
          .hg-button-special {
            background-color: #f44336;
            color: white;
            font-weight: bold;
          }
          .hg-button-special:hover {
            background-color: #d32f2f;
          }
        `}
      </style>
    </div>
  );
};

export default NumericKeyboard;
