/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import Newsletter from "./components/newsletter/Newsletter";
import Thanks from "./components/Thanks.jsx/Thanks";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      {!isSubscribed && <Newsletter />}
      {isSubscribed && <Thanks />}
    </div>
  );
};

export default App;
