const User = {
  name: "Jhon",
  age: 22,
};

const validAge = () => {
  if (User.age > 18) {
    console.log("eres mayor");
  } else {
    console.log("no eres mayor");
  }
};

validAge();
