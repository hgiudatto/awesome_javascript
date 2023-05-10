// Success
let promiseSuccess = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise succeeded: Done!`);
  }, 3000);
});

promiseSuccess.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

// Rejection
let promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`Promise rejected: Oops... something goes wrong. Try again later.`);
  }, 3000);
});

promiseReject.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

// Catch
let promiseCatch = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 3000);
});

promiseCatch.catch((error) => console.log(error));

// Exercise: Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so
// that we can add .then to it.
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Runs after ${ms} milliseconds.`);
    }, ms);
  });
};

// delay(5000).then((result) => console.log(result));

const testDelay = async () => {
  const result = await delay(5000);
  console.log(`Result: ${result}`);
};

testDelay();
