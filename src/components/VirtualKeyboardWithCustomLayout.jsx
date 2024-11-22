import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboardWithCustomLayout = () => {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");

  const customLayout = {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "{shift} z x c v b n m {backspace}",
      "{space}"
    ],
    shift: [
      "! @ # $ % ^ & * ( )",
      "Q W E R T Y U I O P",
      "A S D F G H J K L",
      "{shift} Z X C V B N M {backspace}",
      "{space}"
    ]
  };

  // Function to handle input changes
  const handleChange = (input) => {
    setInput(input);
  };

  // Function to handle special button presses
  const handleKeyPress = (button) => {
    if (button === "{shift}") {
      setLayout((prevLayout) => (prevLayout === "default" ? "shift" : "default"));
    } else if (button === "{backspace}") {
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Virtual Keyboard</h2>
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
        layout={customLayout}
        layoutName={layout}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        display={{
          "{shift}": "⇧ Shift",
          "{backspace}": "⌫ Backspace",
          "{space}": "⎵ Space"
        }}
        buttonTheme={[
          {
            class: "hg-button-special",
            buttons: "{shift} {backspace} {space}"
          }
        ]}
      />
      <style>
        {`
          .hg-button-special {
            background-color: #ff9800;
            color: white;
            font-weight: bold;
          }
          .hg-button-special:hover {
            background-color: #e67e22;
          }
        `}
      </style>
    </div>
  );
};

export default VirtualKeyboardWithCustomLayout;
