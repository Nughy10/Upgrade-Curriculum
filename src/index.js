//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//index.js -> Programa principal (archivo principal de la aplicación en javaScript).

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos la libreria "ReactDOM" que se encarga de passar el "root" principal de toda nuestra aplicación html.
//Importamos las hojas de estilo  de "index" para su utilización (solo definiremos lo más principal).
//Importamos el componente "App" que es el archivo principal de renderizado de la applicación.
//Importamos la libreria "Redux" que se ecarga de gestionar el estado de las aplicaciones (objeto omnipresente). 
//Importamos el archivo "store" que es el encargado de gestionar el contenedor de memoria de la aplicación. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import newStore from './redux/store';

//Definimos una variable "root" que contiene el div con id "root" del archivo html principal.
//Utilizamos el método "render" de "ReactDOM" para poder renderizar nuestro componente principal "App".
//Envolvemos toda la aplicación dentro de la etiqueta "Provider" (esta nos proporciona acceso a la variable
//"store" des de cualquier archivo de la aplicación que esté contenido dentro de las llaves).
//Mediante llaves en modo estricto de React llamararemos el componete de renderizado principal "App".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={newStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

//Para poder utilizar "Redux" de React tenemos que importar las librerias necesarias. 
//npm i redux                     -> Libreria de connectores entre React y Redux. 
//npm i react-redux               -> Libreria de connectores entre Redux y React. 
//npm i redux-thunk               -> Libreria middleware asíncrona para Redux.
//npm i redux-devtools-extension  -> Libreria herramienta para la depuración de Redux. 
