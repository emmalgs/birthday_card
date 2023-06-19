import { displayFinal } from "./final";

export function displayFifth() {
  const mainDiv = document.getElementById("main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const h1 = document.createElement("h1");
  h1.textContent = "Can you please take 5 days of PTO sometime around the end of September because...."
  
  const button = document.createElement("button");
  button.textContent = "YEAH?!?!?!"

  button.addEventListener("click", () => {
    displayFinal();
  });

  mainDiv.append(h1, button); 
}