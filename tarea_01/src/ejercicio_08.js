/* Ejercicio 08. Realizar un script para obtener el número de la serie de Fibonacci que el usuario introduzca. 
     Nota: Serie de Fibonacci: 1, 1, 2, 3, 5, 8, 13... Cada número de la serie es la suma de los dos anteriores. 
     Si usuario introduce el 3, el script devuelve un 2. Si introduce un 7, devuelve un 13. */

function question8() {
    let position = prompt("Indique la posición del número que desea obtener");
    fibonacciSeries(position);
}

function fibonacciSeries(num) {
    
    let fibonacciArray = [1, 1];
    for (let i = 0; i < num; i++) {
        fibonacciNumber = fibonacciArray[i] + fibonacciArray[i + 1];
        fibonacciArray.push(fibonacciNumber);
    }
    let number = fibonacciArray[num-1];

    alert("El número de la serie de Fibonacci correspondiente a la posición " + num + " es el " + number);
}
