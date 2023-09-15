var elemento = document.getElementById('titulo').innerHTML;

console.log(elemento);

let integrante1 = Array.from(document.querySelectorAll('.integrante1'));
let integrante2 = Array.from(document.querySelectorAll('.integrante2'));

let nombre1 = [integrante1[0].innerText, integrante1[1].innerText].filter(Boolean);
let nombre2 = [integrante2[0].innerText, integrante2[1].innerText].filter(Boolean);
let apellido1 = [integrante1[2].innerText.toUpperCase(), integrante1[3].innerText.toUpperCase()];
let apellido2 = [integrante2[2].innerText.toUpperCase(), integrante2[3].innerText.toUpperCase()];

//NO ME DEJA PONER ESTA PARTE - ME SALE ERROR!!!!!!!!!!!!
//let integrante1 = nombre1.concat(apellido1).join(' ');
//let integrante2 = nombre2.concat(apellido2).join(' ');
//console.log("-----\n integrante1: "+integrante1+" \n integrante2: "+integrante2+" \n -----")


//COMPARACIÓN NOMBRE INTEGRANTES:
function comparteNombres (integrante1, integrante2){
    if(nombre1[0]==nombre2[0]){
        console.log("¡Existe coincidencia en el nombre: "+ nombre1[0] + "!");
        //INGRESAR COLOR (COINCIDE) 
        var color = prompt("Ingresa un color para identificar los nombres que coinciden:");
        document.getElementById('nombre1').style.color=color; 
        document.getElementById('nomb1').style.color=color;
    } 

    //OPCION1
    else if(nombre1[0]==nombre2[1]){
        console.log("¡Existe una coincidencia en el nombre: " +nombre1[0]+ "!");
        var color = prompt("Ingresa un color para identificar los nombres que coinciden:");
        document.getElementById('nombre1').style.color=color; 
        document.getElementById('nomb2').style.color=color;
    } 

    //OPCION2
    else  if(nombre1[1]==nombre2[0]){
        console.log("¡Existe una coincidencia en el nombre: " +nombre1[1]+ "!");
        var color = prompt("Ingresa un color para identificar los nombres que coinciden:");
        document.getElementById('nombre2').style.color=color; 
        document.getElementById('nomb1').style.color=color;
    }
    
    //OPCION3
    else  if(nombre1[1]==nombre2[1]){
        console.log("¡Existe una coincidencia en el nombre: " +nombre1[1]+ "!");
        var color = prompt("Ingresa un color para identificar los nombres que coinciden:");
        document.getElementById('nombre2').style.color=color; 
        document.getElementById('nomb2').style.color=color
    }
    
    else{
        console.log("No existe coincidencias en los nombres")
    }
}

comparteNombres();

//COMPARACIÓN APELLIDOS INTEGRANTES:
var compararApellidos = window.confirm("¿Desea comparar apellidos?");
    
if (compararApellidos == true){
    //OPCION1
    if(apellido1[0] == apellido[0]){
        console.log('Existen apellidos que coinciden.');
        let color = prompt('Ingresa un color para identificar los apellidos que coinciden:');
        document.getElementById('apellido1').style.color = color;
        document.getElementById('ape1').style.color = color;
    }
        
    //OPCION2
    if(apellido1[0] == apellido2[1]){
        console.log('Existen apellidos que coinciden.');
        let color = prompt('Ingresa un color para identificar los apellidos que coinciden:');
        document.getElementById('apellido1').style.color = color;
        document.getElementById('ape2').style.color = color; 
    }

    //OPCION3
    if(apellido1[1] == apellido2[0]){
        console.log('Existen apellidos que coinciden.');
        let color = prompt('Ingresa un color para identificar los apellidos que coinciden:');
        document.getElementById('apellido2').style.color = color;
        document.getElementById('ape1').style.color = color;
    }

    //OPCION4
    if(apellido1[1] == apellido2[1]){
        console.log('Existen apellidos que coinciden.');
        let color = prompt('Ingresa un color para identificar los apellidos que coinciden:');
        document.getElementById('apellido2').style.color = color;
        document.getElementById('ape2').style.color = color; 
    }

    else{
        console.log('No existe coincidencias en los apellidos.');
    }
}

  
  
      
  
  