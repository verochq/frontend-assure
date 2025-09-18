const container_counter = document.getElementById('container_counter');
const textInput = container_counter.querySelector(".container_counter__textInput");
const counter_characters = container_counter.querySelector(".container_counter__characters");
const counter_words = container_counter.querySelector(".container_counter__words");

textInput.addEventListener("input", function () {
    const text = textInput.value;
    const characters = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(" ").length;
    counter_characters.innerHTML = `Characters: ${characters} / 200`;
    counter_words.innerHTML = `Words: ${words} / 200`;
    
    if (characters > 200) {
      counter_characters.classList.add('container_counter__characters--tertiary');
      counter_characters.classList.remove('container_counter__characters--secondary');
      counter_characters.classList.remove('container_counter__characters--primary');
      // counter_characters.style.color = "red";
    } else if (characters > 50) {
      counter_characters.classList.add('container_counter__characters--secondary');
      counter_characters.classList.remove('container_counter__characters--primary');
      counter_characters.classList.remove('container_counter__characters--tertiary');
      // counter_characters.style.color = "black";
    } else {
      counter_characters.classList.add('container_counter__characters--primary');
      counter_characters.classList.remove('container_counter__characters--secondary');
      counter_characters.classList.remove('container_counter__characters--tertiary');
    }
});