import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Bye :(");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const onClick = () => setIsShowing((previous) => !previous);

  return (
    <div>
      {isShowing ? <Hello /> : null}
      <button onClick={onClick}>{isShowing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
