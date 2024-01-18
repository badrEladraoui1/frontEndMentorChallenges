/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from "react";

import Newsletter from "./components/newsletter/Newsletter";
import Thanks from "./components/Thanks.jsx/Thanks";

import "./App.css";

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const isSubscribedToTrue = (trueBool) => {
    setIsSubscribed(trueBool);
    setIsDismissed(!trueBool)
  };

  const isDismissedToTrue = (trueBool) => {
    setIsDismissed(trueBool);
    setIsSubscribed(!trueBool);
  };

  return (
    <div className="app">
      {(!isSubscribed && !isDismissed ) || (isSubscribed && isDismissed )? (
        <Newsletter onIsSubscribedToTrue={isSubscribedToTrue} />
      ) : (
        <Thanks onIsDismissedToTrue={isDismissedToTrue} />
      )}
      {/* {!isSubscribed && (
        <Newsletter onIsSubscribedToTrue={isSubscribedToTrue} />
      )}
      {isSubscribed && <Thanks onIsDismissedToTrue={isDismissedToTrue} />} */}
    </div>
  );
};

export default App;
