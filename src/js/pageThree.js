import { handleThirdFormSubmit } from "./pageFour";

export function handleSecondFormSubmit(e) {
  e.preventDefault();
  const response = document.querySelector("input[name=love]:checked").value;
  console.log(response)
  displayThird(response);
}

function displayThird(response) {
  const mainDiv = document.getElementById("main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const h1 = document.createElement("h1");
  if (response == "I know") {
    h1.textContent = "Cool, glad you get it.";
  } else if (response == "I love you too") {
    h1.textContent = "Thanks, babe! I feel the love.";
  } else {
    h1.textContent = "Okay, Mr.Impatient Guy.";
  }
  const h2 = document.createElement("h2");
  h2.textContent = "You've worked hard all these years, maybe it's time to have some fun?"
  const form = document.createElement("form");

  const input1 = document.createElement("input");
  const label1 = document.createElement("label");
  input1.type = "radio";
  input1.name = "work";
  input1.value = "I know";
  label1.textContent = "I know";

  const input2 = document.createElement("input");
  const label2 = document.createElement("label");
  input2.type = "radio";
  input2.name = "work";
  input2.value = "I am pretty tired";
  label2.textContent = "I am pretty tired...";

  const input3 = document.createElement("input");
  const label3 = document.createElement("label");
  input3.type = "radio";
  input3.name = "work";
  input3.value = "not so bad";
  label3.textContent = "It's not so bad, but...go on...";

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";

  form.append(input1, label1, input2, label2, input3, label3, button);
  form.addEventListener("submit", handleThirdFormSubmit);

  mainDiv.append(h1, h2, form); 
}
