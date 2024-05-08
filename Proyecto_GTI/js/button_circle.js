const button = document.querySelector('.button2');

button.addEventListener('mouseenter', (e) => {
    const rect = button.getBoundingClientRect();
    const offsetX = e.clientX - rect.left; // Posición horizontal del cursor respecto al botón
    const offsetY = e.clientY - rect.top;  // Posición vertical del cursor respecto al botón
    
    // Actualiza las variables CSS personalizadas con la posición relativa del cursor
    button.style.setProperty('--x', `${offsetX}px`);
    button.style.setProperty('--y', `${offsetY}px`);
})
button.addEventListener('mouseleave', (e) => {
    const rect = button.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    // Al salir, también actualiza las posiciones para que el círculo se contraiga desde el punto de salida
    button.style.setProperty('--x', `${offsetX}px`);
    button.style.setProperty('--y', `${offsetY}px`);
});