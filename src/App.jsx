//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//APP.jsx -> Programa principal (renderizado principal de la aplicación).

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el componente "Header" que se encarga de manterner el header durante todas las "slides".
//Importamos el componente "Slider" que contiente todos los demás componentes de la aplicación.
import React from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

//Definimos una función que se encargará de manejar todas las acciones de la aplicación.
//Retornamos y inicializamos en formato html los componentes que queremos renderizar.  
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

//Exportamos el archivo de renderizado principal "App" que posteriormente importaremos en el archivo "index.js".
export default App;
