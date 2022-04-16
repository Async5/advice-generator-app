const dice = document.getElementById("dice");
const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");

dice.addEventListener("click", () => {
  updateDom();
});

async function fetchAdvice() {
  const data = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await data.json();

  return slip;
}

async function updateDom() {
  dice.classList.add("active");
  const { id, advice } = await fetchAdvice();
  console.log(id, advice);
  adviceText.innerText = advice;
  adviceId.innerText = "#" + id;
  dice.classList.remove("active");
}
