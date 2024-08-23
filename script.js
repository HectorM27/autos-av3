// Agrega un evento de click al botón de compra
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // Agrega la acción que deseas realizar al clickar el botón
        alert('¡Gracias por su compra a adquirido su nuevo vehiculo!');
    });
});