//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//store.js -> Programa que se encarga de crear el contenedor de memoria. 

//Importamos la libreria "redux" con los elementos "createStore", "applyMiddleware" 
//y "thunk" que se encargan de crear el contendor de memoria (store) de "Redux". 
//Importamos la libreria "redux-devtools-extension" para poder inspeccionar los 
//estados de "Redux" a través de las "DevTools" que hemos instalado anteriormente. 
//Importamos el archivo "pageReducer" que se encarga de actualizar el estado del "reducer".
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pageReducer from "./page/page.reducer";

//Definimos una variable que usa la función de crear el contenedor de memoria de "redux"
//con los parámetros del archivo "reducer" y la configuración por defecto de "redux"
//para poder crear el contenedor de memoria (newStore).
const newStore = createStore(pageReducer, composeWithDevTools(applyMiddleware(thunk)));

 //Exportamos el archivo de "newStore" que posteriormente importaremos en el archivo "index.js".
export default newStore;
