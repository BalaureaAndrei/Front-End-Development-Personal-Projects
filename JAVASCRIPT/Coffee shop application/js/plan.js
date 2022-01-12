"use strict";

const questions = document.querySelectorAll(".questions");
const arrowUp = document.querySelectorAll(".arrows-up");
const arrowDown = document.querySelectorAll(".arrows-down");
const options = document.querySelectorAll(".options");
const coffeeOptions = document.querySelectorAll(".coffee-options");
const optionsNames = document.querySelectorAll(".optionName");
const optionsContainers = document.querySelectorAll('.options--div');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        if (options[i].classList.contains("hidden")) {
            options[i].classList.remove("hidden");
            arrowDown[i].style.display = "none"
            arrowUp[i].style.display = "inline"
        } else {
            options[i].classList.add("hidden");
            arrowDown[i].style.display = "inline"
            arrowUp[i].style.display = "none"
        }
    })
}

optionsContainers.forEach((selectedOption, x) => {
    for (let i = 0; i < selectedOption.children.length; i++) {
        selectedOption.children[i].addEventListener('click', () => {
            for (let j = 0; j < selectedOption.children.length; j++) {
                if (selectedOption.children[i].classList.contains('selected')) {
                    continue;
                }
                selectedOption.children[j].classList.remove('selected');
            }
            if (selectedOption.children[i].classList.contains('selected')) {
                document.getElementById(`poz${x+1}`).textContent = '_______'
                selectedOption.children[i].classList.remove('selected');
            } else if (!selectedOption.children[i].classList.contains('selected')) {
                document.getElementById(`poz${x+1}`).textContent = selectedOption.children[i].children[0].textContent;
                selectedOption.children[i].classList.add('selected');
            }
            if (document.getElementById(`poz${x+1}`).textContent === 'Capsule') {
                document.querySelector('.removable').classList.add('hidden');
                questions[3].classList.add('disabled');
                options[3].classList.add('hidden');
                arrowDown[3].style.display = "inline";
                arrowUp[3].style.display = "none";
                questions[3].style.color = 'rgba(128, 128, 128, 0.342)';
            } else if (document.getElementById(`poz${x+1}`).textContent === 'Filter' || document.getElementById(`poz${x+1}`).textContent === 'Espresso') {
                document.querySelector('.removable').classList.remove('hidden');
                questions[3].classList.remove('disabled');
                questions[3].style.color = 'grey';
            }
        })
    }
})