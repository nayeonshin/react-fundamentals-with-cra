import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((previous) => previous + 1);

  console.log("I run all the time");

  useEffect(() => {
    console.log("Call the API...");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
