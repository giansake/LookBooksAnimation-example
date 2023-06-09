const squares = document.getElementsByClassName("square");

function resetOpacity() {
  for (let index = 0; index < squares.length; index++) {
    const element = squares[index];
    element.style.opacity = "0";
  }
  console.log("reset opacity");
}

function promiseAnimation() {
  let promises = [];
  for (let index = 0; index < squares.length; index++) {
    const element = squares[index];
    promises.push(function () {
      console.log("Started " + index);
      element.style.opacity = "1";
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Finished " + index);
          resolve(true);
        }, 500);
      });
    });
    // promises.push(function () {
    //   return new Promise((resolve) => {
    //     resetOpacity();
    //     setTimeout(() => {
    //       console.log("animation ended");
    //       resolve(true);
    //     }, 500);
    //   });
    // });
  }
  promises.push(function () {
    return new Promise((resolve) => {
      resetOpacity();
      setTimeout(() => {
        console.log("animation ended");
        resolve(true);
      }, 500);
    });
  });
  return promises;
}

function triggerAnimation(arr) {
  let p = Promise.resolve();
  for (var i = 0; i < arr.length; i++) {
    p = p.then(arr[i]);
  }

  return p;
}
