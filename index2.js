/*
const os=require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ',os.freemem(),' bytes');
console.log('total mem: ',os.totalmem(),' bytes');
*/
const fs=require('fs');
//Crear archivo
fs.writeFile('./texto.txt','línea uno',function(error){
    if (error){
        console.log(error);
    }
    console.log('Archivo creado');
});
console.log('ultima linea de codigo');

fs.readFile('./texto.txt',function(error,data){
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});