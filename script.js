// Funciones para cálculos de combinatoria

// Ejemplo: calcular factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Implementa las funciones de permutaciones, variaciones y combinaciones según tus necesidades

// Interfaz de usuario
// Aquí debes crear botones, campos de entrada y elementos HTML para mostrar los resultados

// Ejemplo: escuchar clic en un botón
const calcularButton = document.getElementById('calcular');
calcularButton.addEventListener('click', () => {
    // Obtener valores ingresados por el usuario
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);

    // Realizar cálculos y mostrar resultados
    // Ejemplo: calcular permutaciones sin repetición
    const permutacionesSinRepeticion = factorial(n) / factorial(n - r);
    document.getElementById('resultado').textContent = `Permutaciones sin repetición: ${permutacionesSinRepeticion}`;
});
