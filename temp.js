let team = document.getElementById("team-inf");
let Hscreen = document.getElementsByClassName("hover-screen")[0];
console.dir(Hscreen);
document.addEventListener("click", (element) => {
  console.dir(element);
  if (element.target.className.includes("hover-screen")) {
    team.style.transform = "translate(0, 0%) ";
  }
  if (element.target.id === "close") {
    team.style.transform = "translate(0, 100%) ";
  }
});
