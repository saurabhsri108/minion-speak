const outputText = document.querySelector("#minion-output");
const inputText = document.querySelector("#input-text");
const form = document.querySelector("#minion-form");
const API_URL = `https://api.funtranslations.com/translate/minion.json?text=`;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  outputText.innertext = "";
  const textContent = inputText.value;
  inputText.value = "";

  fetch(`${API_URL}${textContent}`)
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated));
});
