// Recuperar datos del localStorage
const formData = JSON.parse(localStorage.getItem('formData'));
const selectedDate = localStorage.getItem('selectedDate');
const precioTotal = localStorage.getItem('precioTotal');
const precioAdulto = localStorage.getItem('precioAdulto');
const precioMenor = localStorage.getItem('precioMenor');

// Mostrar datos del formulario y la fecha seleccionada
document.getElementById('adultos').textContent = formData.adultos;
document.getElementById('menores').textContent = formData.menores;
document.getElementById('hora').textContent = formData.hora;
document.getElementById('fecha-seleccionada').textContent = selectedDate.slice(selectedDate.indexOf(':') + 1);
document.getElementById('precio-adultos').textContent = precioAdulto;
document.getElementById('precio-menores').textContent = precioMenor;
document.getElementById('precio-total').textContent = precioTotal;

// Limpiar el localStorage
localStorage.removeItem('formData');
localStorage.removeItem('selectedDate');