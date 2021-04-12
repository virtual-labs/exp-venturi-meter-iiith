let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

ids = ["horizontal-tube"];
tube_ids = ["first-tube", "second-tube"];

let asyncMove = async (id, curPosition = 0, finalPosition = 1) => {
  let path = document.getElementById(id);
  while (true) {
    animation_speed = document.getElementById("water-flow").value;
    animation_speed = animation_speed * 0.0002;
    animation_speed = animation_speed == 0 ? 0.0002 : animation_speed;
    if (curPosition > finalPosition) break;
    curPosition += animation_speed;
    path.setAttribute("offset", curPosition);
    await sleep(0.5);
  }
};

let animation = async () => {
  for (let i = 0; i < ids.length; i++) {
    id = ids[i];
    let path = document.getElementById(id);
    flags = [true, true];
    let finalPosition = 1;
    let curPosition = 0;
    while (true) {
      animation_speed = document.getElementById("water-flow").value;
      animation_speed = animation_speed * 0.0002;
      animation_speed = animation_speed == 0 ? 0.0002 : animation_speed;    
      if (id == "horizontal-tube") {
        if (curPosition > 0.05 && flags[0]) {
          asyncMove("first-tube", 0, 0.5);
          flags[0] = false;
        }
        if (curPosition > 0.55 && flags[1]) {
          asyncMove("second-tube", 0, 0.6);
          flags[1] = false;
        }
      }
      if (curPosition > finalPosition) break;
      curPosition += animation_speed;
      path.setAttribute("offset", curPosition);
      await sleep(0.5);
    }
  }
};

let resetEverything = () => {
  tube_ids.forEach((element) => {
    let path = document.getElementById(element);
    path.setAttribute("offset", 0);
  });
  ids.forEach((ele) => {
    let path = document.getElementById(ele);
    path.setAttribute("offset", 0);
  });
};
disablestart = false;

let startAnimation = async () => {
  resetEverything();
  document.getElementById("startbutton").disabled = true;
  document.getElementById("resetbutton").disabled = true;
  await animation();
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};
