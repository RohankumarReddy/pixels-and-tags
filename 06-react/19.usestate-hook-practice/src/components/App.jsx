import React, { useState } from "react";

function App() {
  setInterval(update, 1000);
  const now = new Date().toLocaleTimeString();
  const [exact_time, change] = useState(now);
  function update() {
    const news = new Date().toLocaleTimeString();
    change(news);
  }

  return (
    <div className="container">
      <h1>{exact_time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
