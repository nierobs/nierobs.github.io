'use strict'

const preview = document.getElementById('preview');
const inputs = document.getElementsByTagName('input'); 

const updateDOM = () => {
    const hsl = `hsl(${inputs[0].value} ${inputs[1].value}% ${inputs[2].value}%)`;

    preview.style.backgroundColor = hsl;
    preview.textContent = hsl;
};

const storeValue = (input) => {
    localStorage.setItem(input.id, input.value);
}

const getRandomH = () => Math.floor(Math.random() * 25) * 15;
const getRandomSL = () => Math.floor(Math.random() * 25) * 4 + 4;

const randomColor = () => {
    inputs[0].value = getRandomH();
    inputs[1].value = getRandomSL();
    inputs[2].value = getRandomSL();

    updateDOM();

    for (let i = 0; i < inputs.length; i++) {
        storeValue(inputs[i]);
    }
};

window.addEventListener('load', () => {
    for (let i = 0; i < inputs.length; i++) {
        const item = localStorage.getItem(inputs[i].id);

        if (item !== null) inputs[i].value = item;

        inputs[i].addEventListener('input', () => {
            storeValue(inputs[i])
            updateDOM();
        });
    }
    updateDOM();

    document.getElementById('random').addEventListener('click', () => randomColor());
});
