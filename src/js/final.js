export function displayFinal() {
  const mainDiv = document.getElementById("main");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
  const h1 = document.createElement("h1");
  h1.textContent = "WE'RE GOING TO MEXICO!!!"
  
  const button = document.createElement("button");
  button.textContent = "WHAT?! Tell me more!"

  button.addEventListener("click", () => {
    details1();
  });

  mainDiv.append(h1, button); 
}

function details1() {
  const h2 = document.createElement("h2");
  h2.textContent = "Here are the details: "

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");

  li1.textContent = "We're flying into Guadalajara"
  li2.textContent = "We'll be staying in a little apartment downtown with a rooftop pool"
  li3.textContent = "We will be drinking tequila and eating barbacoa"
  li4.textContent = "All you need to do is brush off your passport and take some PTO!"
  ul.append(li1, li2, li3, li4);

  document.querySelector("#main").append(h2, ul);
}