// This is an example of how promises can help us write asynchronous code

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for: ${src}`));

    document.head.append(script);
  });
};

let promiseScript = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promiseScript.then(
  (script) => console.log(`${script.src} isloaded!`),
  (error) => console.log(`Error: ${error.message}`)
);

promiseScript.then((script) => console.log("Another handler..."));
