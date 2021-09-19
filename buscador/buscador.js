const ofertas = 'ofertas.json';
const cities = [];

// fetch grabs endpoint - at this point a promise and generates readablestream
fetch(ofertas)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(keyword, cities) {
  return cities.filter(place => {
    // does city or state match? use paramater regex
    const regex = new RegExp(keyword, 'gi');
    return place.producto.match(regex)
  });
}

// add results to HTML li
function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.producto.replace(regex, `<span class="highlight">${this.value}</span>`);
    console.log(cityName);
    return `
      <li>
        <span class="name">${cityName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');
  
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

