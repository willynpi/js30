const lis = document.querySelectorAll('li');
let startClick = 0;
let currentClick = 0;
lis.forEach(el => {
    el.addEventListener('click', (e) => {
        if(e.shiftKey) {
            currentClick = el.dataset.id;
            if(currentClick > startClick) {
                for(let i = parseInt(startClick) + 1; i <= currentClick; i++) {
                    tElement = document.querySelector(`li[data-id="${i}"]`);
                    tElement.classList.toggle('checked');
                    tElement.children[0].children[0].checked = !tElement.children[0].children[0].checked;
                }
            } else {
                for(let i = parseInt(currentClick); i < startClick; i++) {
                    tElement = document.querySelector(`li[data-id="${i}"]`);
                    tElement.classList.toggle('checked');
                    tElement.children[0].children[0].checked = !tElement.children[0].children[0].checked;
                }
            }
            
        } else {
            el.classList.toggle('checked');
            el.children[0].children[0].checked = !el.children[0].children[0].checked;
        }
        startClick = el.dataset.id;
    });
});

const items = document.querySelectorAll('.item');
const divsCheckboxed = document.querySelectorAll('.official input[type=checkbox]');
let lastChecked = 0
let currentChecked = 0
const handleCheck = (e) => {
    currentChecked = e.target;
    console.log(currentChecked)
    currentChecked.checked = true;
    let inBetween = false;
    divsCheckboxed.forEach(box => {
        if(e.shiftKey && lastChecked) {
            if(box === lastChecked || box === currentChecked ) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                box.checked = true;
            }
        }
    });
    lastChecked = currentChecked;
}

items.forEach(el => {
    el.addEventListener('click', handleCheck);   
});

