import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  const [fruit, setFruit] = React.useState("Banana");
  const [animal, setAnimal] = React.useState("Horse");

  console.log("render", { fruit, animal });

  useEffect(() => {
    console.log("Hook 1 called");
    // setTimeout(() => {
    setFruit("Watermelon");
    // });
  }, []);

  useEffect(() => {
    console.log("Hook 2 called");
    setAnimal(`Watermelon Horse`);
  }, []);

  return (
    <div className="App">
      <h1>{fruit}</h1>
      <h1>{animal}</h1>
    </div>
  );
}
