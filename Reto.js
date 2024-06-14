// javeScript => tpircSavaj


// function invertirCadena(texto) {
//     let resultado = "";

//     for (let i = texto.length - 1; i >= 0; --i) {
//         resultado += texto[i];
//     }

//     return resultado;
// }

// console.log(invertirCadena("Gato"));


// palabra = Gato 
// i=[G, A, T, O]

// 4-1 = 3  
// resultado += texto[i]  = [O, T, A, G]


// function invertirCadena(str) {
//     return str.split('').reverse().join('');
// }

// const reverse = invertirCadena("Hola mundo")

// console.log(reverse)

// function sumaHastaCero(n) { //creamos la funcion suma hasta cero
//     return n * (n + 1) / 2; // aqui hago que la funcion me retorne el resultado de una suma aritmetica cuya formula es n * (n + 1) / 2
// }
// console.log(sumaHastaCero(3)) // Aqui el console.log

function mcm(a, b) {
// Función para calcular el máximo común divisor (MCD)
function mcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mcd(b, a % b);
    }
}

// Calcular el MCM utilizando la fórmula: MCM(a, b) = (a * b) / MCD(a, b)
return (a * b) / mcd(a, b);
}

// Ejemplo de uso
console.log(mcm(6, 4)); // Output: 12
