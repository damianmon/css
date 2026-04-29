const playBtn = document.getElementById("play");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    playBtn.textContent = "▶";
  } else {
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});
