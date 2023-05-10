// JavaScript Event Listeners
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("Doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {

    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("myForm");
    myForm.addEventListener("submit", (event) => {
        console.log("submit event");
    });

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
      event.target.classList.add("height100");
    });

  /* const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "purple";
    },
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor  = "blue";
    },
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      event.target.textContent = "Clicked";
    },
    false
  ); */
};
