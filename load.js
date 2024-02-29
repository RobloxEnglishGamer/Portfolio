const TEXT = ["Loading","Loading.","Loading..","Loading..."];
const INTERVAL_TIME = 250;

const loadingDiv = document.querySelector(".loading");
const loadingText = document.querySelector(".loading-text")

let intervalID;

function init(){
  let counter = 0;
  intervalID = setInterval(() => {
    counter++;
    if (counter > TEXT.length) counter=0;
    loadingText.textContent = TEXT[counter];
  }, INTERVAL_TIME);
}

function onEvent(){
  clearInterval(intervalID);
  loadingText.textContent = "Loaded!";
  loadingDiv.classList.add("loaded");
}

document.addEventListener("DOMContentLoaded",onEvent);