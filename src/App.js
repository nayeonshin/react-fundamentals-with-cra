import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("");

  const onClick = () => setCounter((previous) => previous + 1);
  const onChange = (event) => setQuery(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'query' changes.");
  }, [query]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'query' & 'counter' change.");
  }, [query, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        placeholder="Search here..."
        type="text"
        value={query}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
