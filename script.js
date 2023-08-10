/* FORMA DE HACERLO DETECTANDO EL BOTON


let span = document.getElementById('span');
let contador = 0;

const btnAumentar = document.querySelector('.btn-info');
btnAumentar.addEventListener('click', () => {
	//Aumenta
	contador++;
	// Reemplaza el texto de Span por el Contador
	span.textContent = contador;
});

const btnDisminuir = document.querySelector('.btn-danger');
btnDisminuir.addEventListener('click', () => {
	//Disminuye
	contador--;
	// Reemplaza el texto de Span por el Contador
	span.textContent = contador;
});
*/

/*
-----------			---------------			-----------		--------

		FORMA DE HACERLO DETECTANDO TODO EL CONTENEDOR Y DONDE SE HIZO CLICK
*/

const container = document.querySelector('.container');
const span = document.getElementById('span');
let contador = 0;

container.addEventListener('click', e => {
	if (e.target.classList.contains('btn-info')) {
		contador++;
		span.textContent = contador;
	} else if (e.target.classList.contains('btn-danger')) {
		contador--;
		span.textContent = contador;
	}
});
