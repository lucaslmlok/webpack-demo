import "regenerator-runtime/runtime";
import "./styles/main.scss";
import _ from "lodash";
import aurora from "./assets/aurora.jpg";

const getH2 = async () => {
  const element = document.createElement("h2");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
};

const getImg = async () => {
  const img = new Image();
  img.src = aurora;
  return img;
};

const main = async () => {
  const h2 = await getH2();
  document.body.appendChild(h2);

  const img = await getImg();
  document.body.appendChild(img);
};

main();
