function wait3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
  });
}

wait3Seconds()
  .then(() => console.log("HI"))
  .catch(() => console.log("err"));

const h1 = document.querySelector("h1");
setTimeout(() => {
  h1.style.color = "red";
}, 2000);

function changeColor(el, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      el.style.color = color;
      resolve();
    }, 1000);
  });
}

changeColor(h1, "teal")
  .then(() => changeColor(h1, "orange"))
  .then(() => changeColor(h1, "red"))
  .then(() => changeColor(h1, "yellow"))
  .then(() => changeColor(h1, "green"))
  .then(() => changeColor(h1, "purple"));
