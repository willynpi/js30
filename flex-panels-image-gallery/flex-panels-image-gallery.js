const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    console.log(e.propertyName);
    this.classList.toggle('open-active');
}
// var toggleOpen = (e) => {
//     console.log(this);
//     e.target.classList.toggle('open');
// }
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
