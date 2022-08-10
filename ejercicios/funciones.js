var respuesta = [
    { response: true},

    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    
    {
        "userId": 2,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }];

    var arrayDeCosas = [1, 2, 3, 4];
    var contador = arrayDeCosas.length;
    console.log(contador);

    var nombre = 'Maite';
    var numeroA = 2;
    var numeroB = 3;

    var mensajeDeTextoConcatenado = nombre + ' El contador de arrayDeCosas es: ' + contador + ' y la suma de a + b es:' + (numeroA + numeroB) ;
    console.log(mensajeDeTextoConcatenado)

    var mensajeDeTextoTemplateString = `${nombre} El contado de arrayDeCosasTemplateString es: ${contador} y la suma de a + b: ${numeroA + numeroB}`;
    console.log(mensajeDeTextoTemplateString)