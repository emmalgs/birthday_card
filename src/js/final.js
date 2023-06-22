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
  const button1 = document.createElement("button");


  li1.textContent = "We're flying into Guadalajara"
  li2.textContent = "We'll be staying in Tlaquepaque, the arts and crafts district close to downtown"
  li3.textContent = "We will be drinking tequila and eating barbacoa"
  li4.textContent = "All you need to do is brush off your passport and take some PTO!"
  ul.append(li1, li2, li3, li4);

  button1.innerText = "Tell me more about where we're staying!"
  button1.addEventListener("click", () => {
    details2();
  })

  document.querySelector("#main").append(h2, ul, button1);
}

function details2() {
  const h2 = document.createElement("h2")
  h2.innerText = "More about Tlaquepaque:"
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");

  const a1 = document.createElement("a");
  a1.href = `https://quintadonjose.com/`;
  a1.innerText = `Quinta Don Jose`;
  li1.textContent = `We'll stay at `;
  li1.append(a1);
  li2.textContent = "Tlaquepaque is known for it's Mariachi Music"
  li3.textContent = "Tlaquepaque is near downtown Guadalajara"
  li4.textContent = "Guadalajara is located in Jalisco, which is known for it's tequila"
  li5.textContent = "That's all I got for now! LOVE YOU! HAPPY 32!!"
  ul.append(li1, li2, li3, li4, li5);

  document.querySelector("#main").append(h2, ul);
}