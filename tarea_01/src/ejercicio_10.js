/* Ejercicio 10. Implementa en un script una función que reciba como parámetros de entrada el mes del año, 
    el número de días que tiene ese mes y el día de la semana en que empieza y devuelva por consola 
    la distribución de los días en formato de calendario de ese mes. Para ello utilizarás arrays de dos dimensiones 
    y console.table(…) para mostrar los resultados por consola. Ejemplo: si el usuario introduce 
    enero, 31 y domingo, el script deberá devolver por pantalla lo siguiente: */

function question10() {

    let months = new Array(2);
    months[0] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    months[1] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    //Solicitud mes
    let mounthIndex;
    let month;
    do {
        month = prompt("Indica un mes: ").toLowerCase();
        month = month[0].toUpperCase() + month.substring(1);
        mounthIndex = months[0].indexOf(month);
    } while (mounthIndex === -1);

    //Obtiene los días que tiene el mes elegido
    let monthDays = months[1][mounthIndex];

    //Solicitud día de la semana
    let dayIndex;
    let initialDay;
    do {
        initialDay = prompt("¿Qué día de la semana empieza?").toLowerCase();
        initialDay = initialDay[0].toUpperCase() + initialDay.substring(1);
        if (initialDay === "Miercoles") initialDay = "Miércoles";
        if (initialDay == "Sabado") initialDay = "Sábado";
        dayIndex = days.indexOf(initialDay);
    } while (dayIndex === -1);

    calCalendar(month, monthDays, days, dayIndex);
}


function calCalendar(month, monthDays, days, dayIndex) {

    //Inicializa array bidemensional
    let calendar = new Array(7);
    for (let i = 0; i < 7; i++) {
        calendar[i] = new Array(7);
    }

    //Rellena array del calendario
    let cont = 0;
    for (let i = 0; i < 8; i++) {
        if (i === 0) {
            for (let k = 0; k < 7; k++) {
                calendar[i][k] = days[k];
            }
        } else if (i === 1) {
            for (let j = dayIndex; j <= 6; j++) {
                calendar[i][j] = cont + 1;
                cont++;
            }
        } else if (i >= 2) {
            for (let h = 0; h < 7; h++) {
                if (cont < monthDays) {
                    calendar[i][h] = cont + 1;
                    cont++;
                } else break;
            }
        }
    }

    console.log("\nCalendario de " + month.toUpperCase());
    console.table(calendar);
}
