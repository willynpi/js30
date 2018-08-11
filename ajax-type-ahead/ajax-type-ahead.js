const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const x = new XMLHttpRequest();
const search = document.getElementById('search');
const ul = document.getElementById('list');
search.focus();
cities = []
x.open('GET', endpoint);
x.responseType = 'json';
x.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) 
        cities = x.response;
}
x.send();

const addComma = (number) => { 
    return number.replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

const findMatch = (keyWord, cities) => {
    const regex = new RegExp(keyWord, 'gi');
    return cities.filter(el => {
        return el.city.match(regex) || el.state.match(regex);
    });
}

const displayMatch = (e) => {
    const keyWord = e.target.value;
    const matches = findMatch(keyWord, cities);
    const regex = new RegExp(keyWord, 'gi');
    const t = matches.map(el => {
        const cityName = el.city.replace(regex, `<span class="hightlight">${keyWord}</span>`);
        const state = el.state.replace(regex, `<span class="hightlight">${keyWord}</span>`);
        const population = addComma(el.population);
        return ` 
            <li>
                <span class="name">${cityName}, ${state}</span>
                <span class="population">${population}</span>
            </li>
        `;
    }).join('');
    ul.innerHTML = t;
}

search.addEventListener('input', displayMatch);
