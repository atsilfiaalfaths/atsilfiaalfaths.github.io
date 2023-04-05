let atsil = document.getElementById("atsilfia");


let splashScreen = document.getElementsByClassName("splash")[0];
let startGame = document.getElementsByClassName("start")[0];
startGame.addEventListener("click", () => {
	splashScreen.style.top = "-120vh";
	splashScreen.style.transition = ".75s";
    alert("as");
});