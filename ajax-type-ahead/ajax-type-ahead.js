const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const x = new XMLHttpRequest();
const search = document.getElementById('search');
const ul = document.getElementById('list');
search.focus();
search.addEventListener('input', (e) => {
    ul.innerHTML = '';
    const keyword = e.target.value;
    if(keyword) {
        x.open('GET', endpoint);
        x.responseType = 'json';
        x.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                r = x.response;
                const result = r.filter(el => {
                    city = el.city.toLowerCase();
                    return city.includes(keyword);
                });
                result.forEach(el => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="name">${el.city}, ${el.state}</span><span class="population">${el.population}</span>`;
                    ul.appendChild(li);
                });
            }
        }
        x.send();
    }
});

