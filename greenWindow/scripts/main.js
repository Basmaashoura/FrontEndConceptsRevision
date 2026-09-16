const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) e.target.className = "done";
  else e.target.className = "";
}

listItems.forEach((item) => item.addEventListener("click", toggleDone));

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpg")
    myImage.setAttribute("src", "images/firefox-icon2.jpg");
  else myImage.setAttribute("src", "images/firefox-icon.jpg");
});

let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

function setUsername() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) setUsername();
else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUsername();
});
