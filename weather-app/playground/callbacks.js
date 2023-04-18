let getUSer = (id, callback) => {
  let user = {
    id: id,
    name: "Vikram",
  };
  callback(user);
};
getUSer(31, (user) => {
  console.log(user);
});

getUSer(31, (misiek) => {
  console.log(misiek);
});

let getUSer2 = (id, callback) => {
  let user = {
    id: id,
    name: "Vikram",
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};
getUSer2(31, (user) => {
  console.log(user);
});

getUSer2(31, (misiek) => {
  console.log(misiek);
});
