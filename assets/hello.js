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
