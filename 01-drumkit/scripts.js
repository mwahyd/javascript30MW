window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key="${event.code}"`);
  const key = document.querySelector(`.key[data-key="${event.code}"]`);
  if (!audio || !key) return;
  // rewind the audio to start if playing
  audio.currentTime = 0;
  audio.play();
});
