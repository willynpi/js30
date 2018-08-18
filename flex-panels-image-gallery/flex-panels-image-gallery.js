const panels = document.querySelectorAll('.panel');
const links = document.querySelectorAll('.panel p a');
function toggleOpen() {
    this.classList.toggle('open');
    this.classList.toggle('open-active');
}
/* prevent panels close when clicking on the links */
links.forEach(link => link.addEventListener('click', e => e.stopPropagation())); 
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

/* js30 official , but I prefer to fire the events at the same time. */
// function toggleActive(e) {
//     if (e.propertyName.includes("flex")) {
//         //'flex-grow' in Chrome and others, while 'flex' only in Safari
//         this.classList.toggle('open-active');
//     }
// }
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
