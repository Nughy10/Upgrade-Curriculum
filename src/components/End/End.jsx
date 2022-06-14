//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//End.jsx -> Componente de footer para todas las páginas (excepto primera y última).

//Importamos la libreria React que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el componente "End" creado en la carpeta src/componentes/End.
import React from 'react';
import './End.css';

//Definimos una función flecha que nos retonrará el contenido del footer creado en "End".
const End = () => {
  return (
    <div id="container5">
        <p id="container5__nombre">Pau Isach Noguera</p>
    </div>
  )
}

//Exportamos el archivo del "Contact" que importaremos en todos los archivos (excepto primera y última).
export default End