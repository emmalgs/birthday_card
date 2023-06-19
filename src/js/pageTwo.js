import { handleSecondFormSubmit } from "./pageThree";

export function displaySecond() {
  const mainDiv = document.getElementById("main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  const h1 = document.createElement("h1");
  h1.textContent = "I love you so much!";

  const form = document.createElement("form");

  const input1 = document.createElement("input");
  const label1 = document.createElement("label");
  input1.type = "radio";
  input1.name = "love";
  input1.value = "I know";
  label1.textContent = "I know";
  label1.append(input1);

  const input2 = document.createElement("input");
  const label2 = document.createElement("label");
  input2.type = "radio";
  input2.name = "love";
  input2.value = "I love you too";
  label2.textContent = "I love you too!";
  label2.append(input2);

  const input3 = document.createElement("input");
  const label3 = document.createElement("label");
  input3.type = "radio";
  input3.name = "love";
  input3.value = "Get on with it";
  label3.textContent = "Get on with it";
  label3.append(input3);

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";

  form.append(label1, label2, label3, button);
  form.addEventListener("submit", handleSecondFormSubmit);

  mainDiv.append(h1, form); 
}