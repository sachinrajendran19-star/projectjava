import React, { useState } from "react";

function App() {
  // 1. Counter
  const [count, setCount] = useState(0);

  // 2. Input text
  const [text, setText] = useState("");

  // 3. Toggle
  const [show, setShow] = useState(true);

  // 4. Form
  const [name, setName] = useState("");

  // 5. Color
  const [color, setColor] = useState("black");

  return (
    <div style={{ padding: "20px", color: color }}>
      <h1>React Interactions Demo</h1>

      {/* 1. Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      {/* 2. Input */}
      <h2>Live Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>

      <hr />

      {/* 3. Toggle */}
      <h2>Show / Hide</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>This text can be hidden!</p>}

      <hr />

      {/* 4. Form */}
      <h2>Form</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => alert("Hello " + name)}>Submit</button>

      <hr />

      {/* 5. Color Change */}
      <h2>Change Color</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

export default App;