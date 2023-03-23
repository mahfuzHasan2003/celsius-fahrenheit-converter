const cInp = document.querySelector(".celsius-input"),
  fInp = document.querySelector(".fahrenheit-input");

cInp.oninput = () => {
  fInp.value = (cInp.value * 9) / 5 + 32;
};
fInp.oninput = () => {
  cInp.value = ((fInp.value - 32) * 5) / 9;
};
