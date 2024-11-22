import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const MultilingualKeyboard = () => {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");

  const layouts = {
    // default: {
    //   default: ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m {backspace}", "{space}"],
    // },
    spanish: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l ñ",
        "z x c v b n m {backspace}",
        "á é í ó ú ü {space}",
      ],
    },
  };

  const handleChange = (input) => {
    setInput(input);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multilingual Keyboard</h2>
      <select
        onChange={(e) => setLayout(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      >
        <option value="default">English</option>
        <option value="spanish">Spanish</option>
      </select>
      <br />
      <input
        type="text"
        value={input}
        placeholder="Type here..."
        readOnly
        style={{
          marginBottom: "10px",
          width: "100%",
          maxWidth: "300px",
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <Keyboard layout={layouts[layout]} onChange={handleChange} />
    </div>
  );
};

export default MultilingualKeyboard;
