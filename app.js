function wait3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
  });
}

wait3Seconds()
  .then(() => console.log("HI"))
  .catch(() => console.log("err"));
