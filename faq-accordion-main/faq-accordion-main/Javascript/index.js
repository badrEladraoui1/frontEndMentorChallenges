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
    if (addedElem) addedElem.parentNode.removeChild(addedElem); // this important !!!
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
  //   const div = document.getElementById("firstQuestion");
  //   const p = document.createElement("p");
  //   p.innerHTML =
  //     "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
  //   div.appendChild(p);
  settingIdsAndAppendingChild(
    "plusQuestion1",
    "firstQuestion",
    "p",
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  );
};

// // testing first (to remove after)

// const addingParagraph2 = () => {
//   //   const div = document.getElementById("secondQuestion");
//   //   const p = document.createElement("p");
//   //   p.innerHTML =
//   //     "Yes, Frontend Mentor offers both free and premium codingchallenges, with the free option providing access to a range of projects suitable for all skill levels.";
//   //   div.appendChild(p);
//   settingIdsAndAppendingChild(
//     "secondQuestion",
//     "p",
//     "Yes, Frontend Mentor offers both free and premium codingchallenges, with the free option providing access to a range of projects suitable for all skill levels."
//   );
// };

// // second method with the eventListener

// const addingParagraph3 = () => {
//   //   const div = document.getElementById("thirdQuestion");
//   //   const p = document.createElement("p");
//   //   p.innerHTML =
//   //     "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
//   //   div.appendChild(p);
//   settingIdsAndAppendingChild(
//     "thirdQuestion",
//     "p",
//     "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
//   );
// };
// {
//   //   const plusIcon = document.getElementById("plusQuestion3");
//   //   plusIcon.addEventListener("click", addingParagraph3);
//   addingAnEventListener("plusQuestion3", "click", addingParagraph3);
// }

// const addingParagraph4 = () => {
//   //   const div = document.getElementById("fourthQuestion");
//   //   const p = document.createElement("p");
//   //   p.innerHTML =
//   //     "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
//   //   div.appendChild(p);
//   settingIdsAndAppendingChild(
//     "fourthQuestion",
//     "p",
//     "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
//   );
// };
// {
//   //   const plusIcon = document.getElementById("plusQuestion4");
//   //   plusIcon.addEventListener("click", addingParagraph4);
//   addingAnEventListener("plusQuestion4", "click", addingParagraph4);
// }
