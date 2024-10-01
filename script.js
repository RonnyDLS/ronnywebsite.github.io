const myNombre = document.getElementById('myNombre');

const click = document.getElementById('click');
click.addEventListener('click', ()=>{
    const listaNombre = myNombre.querySelectorAll('*');
    listaNombre.forEach(nombre => {
        nombre.remove();
    })

    const nombre = document.createElement('div');
    nombre.innerHTML="Ronny De Los Santos Peralta";
    nombre.className = 'myNombre';

    myNombre.appendChild(nombre);
})
