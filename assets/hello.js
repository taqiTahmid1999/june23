console.log("This is from Hello Function");

function outerFunction(outer_param) {
  console.log(`From Outer: ${outer_param}.`);
  return function (inner_param) {
    console.log(`From Inner: ${inner_param}.`);
    console.log(
      `Can Access both Inner(${inner_param}) and Outer(${outer_param}).`,
    );
  };
}
const innerFunction = outerFunction(6);
innerFunction(9);
