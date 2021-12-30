import React from "react";

let hour = new Date().toLocaleTimeString("en-US", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

function App() {
  const [time, newTime] = React.useState(hour);

  function setTime() {
    const newDate = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });

    newTime(newDate);
  }

  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
