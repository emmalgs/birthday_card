import { displayFifth } from "./pageFive";

export function handleThirdFormSubmit(e) {
  e.preventDefault();
  const response = document.querySelector("input[name=work]:checked").value;
  displayFourth(response);
}

function displayFourth(response) {
  const mainDiv = document.getElementById("main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const h1 = document.createElement("h1");
  if (response == "I know") {
    h1.textContent = "Glad we're one the same page!";
  } else if (response == "I am pretty tired") {
    h1.textContent = "I know, hun, you've got incredible stamina!";
  } else {
    h1.textContent = "Sure it's not so bad, but could be better, no?!";
  }
  const h2 = document.createElement("h2");
  h2.textContent = "So to get on with your birthday celebration I have just one question to ask..."
  const button = document.createElement("button");
  button.textContent = "Okay..."

  button.addEventListener("click", () => {
    displayFifth();
  });

  mainDiv.append(h1, h2, button); 
}