const answer = document.querySelector('.ans');
const secret = '38,38,40,40,37,39,37,39,65,66';
const pressed = [];
let words = '';
window.addEventListener('keydown', e => {
    pressed.push(e.keyCode);
    words = pressed.join(',');
    pressed.splice(-11,pressed.length-10);
    // keep pressed has only 10 elements.
    if(words.includes(secret)){
        cornify_add();
        pressed.length = 0;
    }
});