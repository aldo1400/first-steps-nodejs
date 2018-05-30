/*
	Organización de Código JS
		librerias/modulos
		constantes
		objetos/variables
		funciones
		eventos
		ejecuciones
	Usar camelCase
		Cuando una instrucción tenga una sola palabra, va en minúsculas p.e. require()
		Sólo las clases rompen esta regla, siempre va en mayúscula la letra inicial p.e. EventEmmiter()
		Cuando una instrucción tenga 2 o más palabras, apartir de la segunada la primer letra va en mayúscula p.e. createServer()
		Tipos de CamelCase
			UpperCamelCase
				Date()
				EventEmmiter()
			lowerCamelCase
				getElementById()
				createServer()
*/

'use strict'; //modo estricto para programar con buenas prácticas

console.log('Hola mundo desde Node.js,esto ser vera en la terminal de comandos');
console.log(2+5);

// console.log(window);

console.log(global);

setInterval(()=>{
    console.log('Hola Node.js'+new Date())
},1000);