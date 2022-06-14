//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//index.js -> Programa principal (archivo principal de la aplicación en javaScript).

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos la libreria "ReactDOM" que se encargá de passar el "root" principal de toda nuestra aplicación html.
//Importamos las hojas de estilo  de "index" para su utilización (solo definiremos lo principal).
//Importamos el componente "App" que es el archivo principal de renderizado de la applicación. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Definimos una variable "root" que contiene el div con id "root" del archivo html principal.
//Utilizamos el metodo "render" de "ReactDOM" para poder renderizar nuestro componente principal "App".
//Mediante llaves en modo estricto de React llamararemos el componete de renderizado principal "App".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


