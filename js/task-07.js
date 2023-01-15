const refs = {

    fontSizeControl: document.getElementById('font-size-control'),
    text: document.getElementById('text'),

};



const INITIAL_VALUE = refs.fontSizeControl.value;
const INITIAL_FONT_SIZE = 16;


const handlerChangeTextSize = (event) => {

    const calculatedFontSize = event.currentTarget.value * INITIAL_FONT_SIZE / INITIAL_VALUE;
    refs.text.style.fontSize = `${calculatedFontSize}px`;

};


refs.fontSizeControl.addEventListener('input',handlerChangeTextSize);