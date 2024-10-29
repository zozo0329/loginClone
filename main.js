const loginButton = document.querySelector(".user-input button");
const cloneOne = document.getElementById("cloneOne");
loginButton.addEventListener("click", function () {
  loginButton.style.visibility = "hidden";
  cloneOne.style.visibility = "visible";
});
cloneOne.addEventListener("click", function () {
  cloneOne.style.visibility = "hidden";
  document.querySelector("#cloneThree").style.visibility = "visible";
});
document.querySelector("#cloneThree").addEventListener("click", function () {
  document.querySelector("#cloneThree").style.visibility = "hidden";
  document.querySelector("#cloneTwo").style.visibility = "visible";
});
const audio = new Audio(`sounds/Yo estoy puesto pa ti.mp3`);
const pou = new Audio(`sounds/pou-sound-effect.mp3`);
document.querySelector("#cloneTwo").addEventListener("click", function () {
  audio.play();
  document.querySelector(".cat img").style.display = "block";
  document.querySelector("main").style.display = "none";
});
document.querySelector(".other-btn a").addEventListener("click", function () {
  pou.play();
});
document
  .querySelector("#create-account")
  .addEventListener("click", function () {
    pou.play();
  });
document.querySelector(".create-page a").addEventListener("click", function () {
  pou.play();
});
