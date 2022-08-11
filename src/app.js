window.onload = () => {
  document.getElementById("excuse").innerHTML = gexcusa();
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let gexcusa = () => {
  let who = ["My dog", "My grandpapi", "A Bird"];
  let action = ["ate", "pooped", "grabbed"];
  let what = ["my homework", "the car", "the roof"];
  let when = ["last night.", "right now.", "while I was asleep."];

  return (
    who[random(0, 3)] +
    " " +
    action[random(0, 3)] +
    " " +
    what[random(0, 3)] +
    " " +
    when[random(0, 3)]
  );
};
