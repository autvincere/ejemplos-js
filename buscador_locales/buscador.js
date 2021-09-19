const ofertas = 'ofertas.json';
const vigentes = [];

// fetch grabs endpoint - at this point a promise and generates readablestream
fetch(ofertas)
  .then(blob => blob.json())
  .then(data => vigentes.push(...data), 
  console.log(vigentes) );

function findMatches(keyword, obj) {
  return obj.filter( place => {
    // does city or state match? use paramater regex
    const regex = new RegExp( keyword, 'gi');
    return place.producto.match(regex)
  });
}

// add results to HTML li
function displayMatches() {
  const productos = findMatches(this.value, vigentes)
  console.log(productos);

  const html = productos.map( producto => {
    if ( producto.producto ) {
      return `
      <li>
        <span class="name">${producto.producto}</span>
      </li>
    `;
    } else {
      return ``;
    }
  }).join('');
  
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search-input');
const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

