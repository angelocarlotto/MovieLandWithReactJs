import { useState, useEffect } from "react";
import "./App.css";
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(2);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <div>
        <button style={{ display: "inline" }} onClick={() => setCount(count - 1)}>
          -
        </button>
        <h1 style={{ display: "inline" }}>{count}</h1>
        <button style={{ display: "inline" }} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};

const App = () => {
  const name = "John";
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "Some one"}! XD</h1>
      {name ? (
        <>
          <Person name={"John 2"} age="33" />
          <Person name={name} />
          <Person name={"Maria"} />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </>
      ) : (
        <>
          <h2>there is no name</h2>
        </>
      )}
    </div>
  );
};

export default App;
