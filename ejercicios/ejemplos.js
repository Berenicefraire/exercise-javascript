var variable = 'esto es una variable';

function imprime() {
  console.log(`${variable} llamada dentro de una funcion`);
};

imprime();
console.log(`${variable} llamada fuera de una funcion`);
//ejemplo scope global y local


//ejemplo de hoisting
//forma correcta
var nombre= "bere";
function saludo(){
    console.log ("hola" + nombre);
    
}

saludo();

//forma incorrecta
function saludo(){
    console.log ("hola" + nombre);

}
var nombre= "bere";
