document.getElementById('txtBtn').addEventListener('click',cargarTXT)

function cargarTXT(){
     fetch('datos.txt')
          .then(res => console.log(res.status))
}