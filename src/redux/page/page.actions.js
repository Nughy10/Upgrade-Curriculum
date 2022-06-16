//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//page.actions.js -> Programa para definir las acciones que tendrá el archivo "reduccer".

//Definimos una variable para su exportación en el archivo "reducer". Variable que indica
//el tipo de acción (cambio de página, la única acción que realizamos por "redux").
export const CHANGE_PAGE = 'CHANGE_PAGE';

//Definimos una función para su exportación en todos los archivos que queramos cambiar de página.
//Esta función recibirá el parametro "newPage" y se lo pasaremos al "reducer" mediante el atributo "payload".
//La función "dispatch" es una función de "redux" que se encarga de enviar los atributos al "reducer".
export const changePage = (newPage) => dispatch =>{
    dispatch({
        type: CHANGE_PAGE,
        payload: newPage
    })
}