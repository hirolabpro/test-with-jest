//Imprime Hello Worls
console.log("Hello World");

//Varialble suma
const sum = (a,b) => {
    return a + b
}





//*********************************************** */





// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInPound){
    // convertimos el valor a Pounds
    let valueInYen = valueInPound * 0.8;
    // returnamos el valor
    return valueInYen;

    // tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js

}

module.exports = { sum, fromYenToPound }

//****************************************************** */




