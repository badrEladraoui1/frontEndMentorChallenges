/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import dice from "./assets/icon-dice.svg";
import pattern from "./assets/pattern-divider-desktop.svg";

const App = () => {
  const [adviceId, setAdviceId] = useState(null);

  return (
    //313b47
    <div className="position-absolute top-50 start-50 translate-middle bg-secondary-subtle p-5 rounded">
      <h6 className="text-center mb-4">ADVICE #123</h6>
      <h2 className="text-center mb-10">
        It is easy to sit up and take notice whats difficult is getting up and
        taking action
      </h2>
      <img className="m-auto" src={pattern}></img>
      <div className=" rounded-circle border border-4">
        <img
          className="p-4 position-absolute top-100 start-50 translate-middle m-auto"
          src={dice}
        ></img>
      </div>
    </div>
  );
};

export default App;
