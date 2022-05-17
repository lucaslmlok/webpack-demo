import "./styles/main.scss";
import _ from "lodash";
import aurora from "./assets/aurora.jpg";

const getComponent = async () => {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const myImage = new Image();
  myImage.src = aurora;
  element.appendChild(myImage);
  return element;
};

getComponent().then((component) => {
  document.body.appendChild(component);
});
