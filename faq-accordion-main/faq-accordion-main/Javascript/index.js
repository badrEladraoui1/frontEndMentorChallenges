
// we can use this reusable function instead of repeating it each time to set our element

const settingIdsAndAppendingChild = (
  iconId,
  containerId,
  newElement,
  textToAdd
) => {
  const bigElem = document.getElementById(containerId);
  const icon = document.getElementById(iconId);

  if (icon.src.includes("icon-plus.svg")) {
    icon.src = "./assets/images/icon-minus.svg";
    const newSecondElem = document.createElement(newElement);
    newSecondElem.innerText = textToAdd;
    bigElem.appendChild(newSecondElem);

  } else {
    icon.src = "./assets/images/icon-plus.svg";
    const addedElem = bigElem.getElementsByTagName(newElement)[0]; // first paragraph found here
    if (addedElem) addedElem.parentNode.removeChild(addedElem)
  }
};

// we can use this reusable function instead of repeating it each time to add an event listener

const addingAnEventListener = (iconId, event, addingParagraphfunction) => {
  const theIcon = document.getElementById(iconId);
  theIcon.addEventListener(event, addingParagraphfunction);
};

// applying the changingParagraph methods (with two methods)

//first method with onClick in the html

const addingParagraph1 = () => {
  settingIdsAndAppendingChild(
    "plusQuestion1",
    "firstQuestion",
    "p",
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  );
};



const addingParagraph2 = () => {

  settingIdsAndAppendingChild(
    "plusQuestion2",
    "secondQuestion",
    "p",
    "Yes, Frontend Mentor offers both free and premium codingchallenges, with the free option providing access to a range of projects suitable for all skill levels."
  );
};

// second method with the eventListener

const addingParagraph3 = () => {

  settingIdsAndAppendingChild(
    "plusQuestion3",
    "thirdQuestion",
    "p",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  );
};
  addingAnEventListener("plusQuestion3", "click", addingParagraph3);

const addingParagraph4 = () => {
  settingIdsAndAppendingChild(
    "plusQuestion4",
    "fourthQuestion",
    "p",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  );
};
  addingAnEventListener("plusQuestion4", "click", addingParagraph4);

