console.log("This is from Hello Function");
const innerFunction = outerFunction(6);
innerFunction(9);
function outerFunction(outer_param) {
  const hello = function () {
    console.log("Hello World from Outer");
  };
  console.log(`From Outer: ${outer_param}.`);
  return function (inner_param) {
    console.log(`From Inner: ${inner_param}.`);
    console.log(
      `Can Access both Inner(${inner_param}) and Outer(${outer_param}).`,
    );
    hello();
  };
}
function factory() {
  console.log("Factory Function");
  return {
    product1: (param1) => {
      console.log(`Product 1: ${param1}`);
    },
    product2: (param2) => {
      console.log(`Product 2: ${param2}`);
    },
    product3: (param3) => {
      console.log(`Product 3: ${param3}`);
    },
  };
}
const bucket = factory();
bucket.product1(1);
bucket.product2(2);
bucket.product3(3);
const obj = {
  name: "Taqi Tahmid",
  greeting: function () {
    console.log("This is " + this.name);
  },
};
obj.greeting();
