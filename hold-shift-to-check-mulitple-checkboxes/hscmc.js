const lis = document.querySelectorAll('li');
let startClick = 0;
let currentClick = 0;
lis.forEach(el=>{
    el.addEventListener('click', (e) => {
        if(e.shiftKey) {
            currentClick = el.dataset.id;
            for(let i = parseInt(startClick) + 1; i <= currentClick; i++) {
                tElement = document.querySelector(`li[data-id="${i}"]`);
                tElement.classList.toggle('checked');
                tElement.children[0].children[0].checked = !tElement.children[0].children[0].checked;
            }
        } else {
            el.classList.toggle('checked');
            el.children[0].children[0].checked = !el.children[0].children[0].checked;
        }
        startClick = el.dataset.id;
    });
});

