const heading = document.querySelector("#bg-heading");
const body = document.querySelector("body");
const darkBg = document.querySelector(".dark");
const whiteBg = document.querySelector(".white");
const salmonBg = document.querySelector(".salmon");
const orangeBg = document.querySelector(".orange");
const yellowBg = document.querySelector(".yellow");
const greenBg = document.querySelector(".green");
const blueBg = document.querySelector(".blue");
const redBg = document.querySelector(".red");

let showBackground = false;
darkBg.addEventListener("click", () => {
  body.style.background = "#111";
  heading.innerHTML = "hello dark background.";
  heading.style.color = "#fff";
  showBackground = true;
});
whiteBg.addEventListener("click", () => {
  body.style.background = "#fff";
  heading.innerHTML = "hello white background.";
  heading.style.color = "#000";
  showBackground = true;
});
salmonBg.addEventListener("click", () => {
  body.style.background = "salmon";
  heading.innerHTML = "hello salmon background.";
  heading.style.color = "#fff";
  showBackground = true;
});
orangeBg.addEventListener("click", () => {
  body.style.background = "orange";
  heading.innerHTML = "hello orange background.";
  heading.style.color = "#fff";
  showBackground = true;
});
yellowBg.addEventListener("click", () => {
  body.style.background = "yellow";
  heading.innerHTML = "hello yellow background.";
  heading.style.color = "#fff";
  showBackground = true;
});
greenBg.addEventListener("click", () => {
  body.style.background = "green";
  heading.innerHTML = "hello green background.";
  heading.style.color = "#fff";
  showBackground = true;
});
blueBg.addEventListener("click", () => {
  body.style.background = "blue";
  heading.innerHTML = "hello blue background.";
  heading.style.color = "#fff";
  showBackground = true;
});
redBg.addEventListener("click", () => {
  body.style.background = "red";
  heading.innerHTML = "hello red background.";
  heading.style.color = "#fff";
  showBackground = true;
});
