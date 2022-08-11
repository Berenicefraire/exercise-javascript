function suma(){
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    
    // Operador ternario
    var val1 = isNaN(parseInt(valor1.value)) ? 0 : parseInt(valor1.value);
    
    // var val1;
    // if(isNaN(parseInt(valor1.value))) {
    //     val1 = 0;
    // } else {
    //     val1 = parseInt(valor1.value);
    // }

    var val2 = parseInt(valor2.value);
    var suma = (val1 + val2);  
    if(isNaN(suma)) {
        console.log("No es sumable")
    } else {
        console.log(suma)
    }
    console.log(typeof val1, val1)
    return false;
}
