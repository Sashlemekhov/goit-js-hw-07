const fontSizeControlRef = document.querySelector('#font-size-control');
const changeableText = document.querySelector('#text'); 

fontSizeControlRef.addEventListener('input', changeFontSizeHandler);

function changeFontSizeHandler(event) {
  let size = fontSizeControlRef.value;
  changeableText.style.fontSize = size + "px";
};





