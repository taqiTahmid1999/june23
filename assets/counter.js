function initCounter(root = document) {
  const helloElem = root.querySelector("#hello");
  if (!helloElem) return; // not on this page, bail safely

  console.log(helloElem.dataset.template);

  const numElem = root.querySelector("#hello_num");
  const btn = root.querySelector("#increament");

  btn.addEventListener("click", function () {
    numElem.innerText++;
    console.log(numElem.innerText);
  });
}

document.addEventListener("DOMContentLoaded", () => initCounter());
