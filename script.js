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
// Escuchar cambios en las opciones
const objetosRadio = document.querySelectorAll('input[name="objetos"]');
objetosRadio.forEach((radio) => {
    radio.addEventListener('change', () => {
        const seleccion = radio.value;
        if (seleccion === 'letras') {
            mostrarLetras();
        } else if (seleccion === 'numeros') {
            mostrarNumeros();
        }
        // Agrega más casos según tus necesidades
    });
});

// Funciones para mostrar letras y números
function mostrarLetras() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    document.getElementById('visualizacion').textContent = letras;
}

function mostrarNumeros() {
    const numeros = '123456789';
    document.getElementById('visualizacion').textContent = numeros;
}


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
