let 
    contenido = document.querySelector('#contenido');
    contTable = document.getElementById('cont-table')
// const btn = document.getElementById('btn');

function traer() {
    fetch('tabla.json')
        .then(res => res.json())
        .then(datos => {
            //console.log(datos);
            tabla(datos)
        })
}

function tabla(datos) {
    contTable.innerHTML =
    `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">region</th>
                <th scope="col">Local</th>
                <th scope="col">Comuna</th>
                <th scope="col">Dirección</th>
                <th scope="col">Horario</th>
            </tr>
        </thead>
        <tbody id="contenido">
                ${datos.map(function(data){
                    return `
                    <tr>
                    <td>${ data.región }</td>
                    <td>${ data.local }</td>
                    <td>${ data.comuna }</td>
                    <td>${ data.dirección }</td>
                    <td>${ data.horario }</td>
                    <tr>
                    `
                }).join('')}
            </tr>
        </tbody>
    </table>
    `
}
traer();