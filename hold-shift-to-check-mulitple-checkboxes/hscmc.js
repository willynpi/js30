const lis = document.querySelectorAll('li');
lis.forEach(el=>{
    el.addEventListener('click', () => {
        el.classList.toggle('checked');
        el.children[0].children[0].checked = !el.children[0].children[0].checked;
    });
});