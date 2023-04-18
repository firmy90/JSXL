let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey! It worked!");
    console.log(typeof resolve);
    reject("Unable to fulfill promise");
  }, 2500);
});

// console.log(somePromise); // Promise { <pending> }

somePromise.then(
  (message) => {
    console.log("Success: ", message);
  },
  (errorMessage) => {
    console.log("Error: ", errorMessage);
  }
);

let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

asyncAdd(5, 7)
  .then((res) => {
    console.log("Result: ", res);
    return asyncAdd(res, 33);
  })
  .then((res) => {
    console.log("Should be 45 ", res);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
