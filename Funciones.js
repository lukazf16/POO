//Ejercicio 1
function esPar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}
console.log(esPar(8));
console.log(esPar(7));

//Ejercicio 2
function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para los números negativos.";
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3));

//Ejercicio 3
const sumarArray = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
};
let num = [10, 20, 30, 5];
console.log("La suma del arreglo es: " + sumarArray(num));

//Ejercicio 4
function cuadradoTradicional(n) {
    return n * n;
}

const cuadradoAnonimo = function(n) {
    return n * n;
};
const cuadradoFlecha = n => n * n;
let numero = 6;
console.log("Tradicional (" + numero + "²): " + cuadradoTradicional(numero));
console.log("Anónima (" + numero + "²): " + cuadradoAnonimo(numero));
console.log("Flecha (" + numero + "²): " + cuadradoFlecha(numero));

//Ejercicio 5
function funcionTradicional() {
    console.log("Función Tradicional ejecutada.");
    let resultadoFinal = funcionAnonima(); 
    console.log(resultadoFinal);
}
const funcionFlecha = (mensaje) => {
    return mensaje + "Función Flecha ejecutada.";
};

const funcionAnonima = function() {
    let texto = "Función Anónima ejecutada. ";
    return funcionFlecha(texto); 
};
funcionTradicional();