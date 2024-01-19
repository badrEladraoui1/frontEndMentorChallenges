/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from "react";

import Newsletter from "./components/newsletter/Newsletter";
import Thanks from "./components/Thanks.jsx/Thanks";

import "./App.css";

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailToThanks, setEmailToThanks] = useState("");

  const getEmailFromForm = (email) => {
    setEmailToThanks(email);
  };

  const isSubscribedToTrue = (trueBool) => {
    setIsSubscribed(trueBool);
  };

  return (
    <div className="app">
      {!isSubscribed ? (
        <Newsletter
          onIsSubscribedToTrue={isSubscribedToTrue}
          onGetEmailFromForm={getEmailFromForm}
        />
      ) : (
        <Thanks emailToThanks={emailToThanks} />
      )}
    </div>
  );
};

export default App;
