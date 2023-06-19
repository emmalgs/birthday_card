import { displaySecond } from "./pageTwo";

export function displayFirst() {
  const mainDiv = document.getElementById("main");

  const h1 = document.createElement("h1");
  h1.textContent = "Hey Babe";

  const button = document.createElement("button");
  button.textContent = "Click me";
  button.addEventListener("click", () => {
    displaySecond();
  });

  mainDiv.append(h1, button);
}