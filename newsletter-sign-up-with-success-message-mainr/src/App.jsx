/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from "react";

import Newsletter from "./components/newsletter/Newsletter";
import Thanks from "./components/Thanks.jsx/Thanks";

import "./App.css";

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="app">
      {!isSubscribed && <Newsletter />}
      {isSubscribed && <Thanks />}
    </div>
  );
};

export default App;
