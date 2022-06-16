//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//page.reducer.js -> Programa que se encarga de actualizar el estado que proporciona el "reducer".

//Importamos todo el archivo "actions" que contiene la variable con el nombre de la acción. 
import * as actions from "./page.actions";

//Definimos un objeto con dos atributos, este será el estado inicial de nuestra aplicación. 
const INITIAL_STATE = {
    page: 1,
    previous: 1,
  }
  
  //Definimos una función con los atributos estado inicial y la acción de cambio de página. 
  const pageReducer = (state = INITIAL_STATE, action) => {
    //Realizamos un "switch-case" para manejar la función que actualizará la página, 
    //mediante los atributos "page" y "previous" del estado objeto definido anteriormente. 
    switch(action.type) {
        case actions.CHANGE_PAGE:
            return {...state, page: action.payload , previous: state.page}
        //Por defecto retornaremos el estado de página actual. 
        default:
            return state
    }
  };
  
  //Exportamos el archivo de "pageReducer" que posteriormente importaremos en el archivo "store.js".
  export default pageReducer;