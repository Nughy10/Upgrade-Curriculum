//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//APP.jsx -> Programa principal (renderizado principal de la aplicación).

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "Header" que se encarga de manterner el header durante todas las "slides".
//Importamos el componente "Slider" que contiente todos los demás componentes de la aplicación.
import React from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

//Definimos una función que se encargará de manejar todas las acciones de la aplicación. 
//Definimos una variable "useState" con el parámetro "page" y la función "setPage" (inicialización en "1"). 
//este estado manejará que "slide" se tiene que visualizar en cada momento (header y botones). 
//Definimos una variable "useState" con el parámetro previous y la función "setPrevious" (inicialización en "page"). 
//este estado guardará la "slide" anterior a la actual para poder manejar la dirección del slide (transiciones).
function App() {

  //Definimos una función de flecha que recibe por parámetro la nueva "slide" a la que debe ir la aplicación. 
  //Reconfiguramos la variable previous anterior con la variable page para que se guarde la "slide" anterior.
  //Reconfiguramos la variable page anterior con la variable newPage para que guarde la nueva "slide".

  //Retornamos en formato html los componentes que queremos renderizar de la aplicación. 
  //Inicializamos los componentes generales de la aplicación, la propiedad page para que sepa a qué "slide"
  //nos encontramos, la propiedad "onChangePage" para que el header actue en conseqüencia dependiendo de la 
  //"slide" a la que nos encontramos y la propiedad previous que nos indica de que "slide" provenimos. 
  return (
    <div className="App">
    <Header />
    <Slider />
    </div>
  );
}

//Exportamos el archivo de renderizado principal "App" que posteriormente importaremos en el archivo "index.js".
export default App;
