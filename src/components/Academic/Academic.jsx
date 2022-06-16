//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Academic.jsx -> Componente información academica del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Academic" creado en la carpeta src/components/Academic. 
//La función "useDispatch" es una función de "redux" que se encarga de enviar los atributos al "reducer".
//La función "useSelector" es una función de "redux" que se encarga de proporcionarnos el estado de página actual.
import React, { useState } from 'react';
import End from '../End/End.jsx';
import '../../assets/uicons/css/uicons-regular-rounded.css';
import './Academic.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha para que al presionar el botón triangulo se reciba por parámetro la nueva "slide".
//Definimos una función flecha para que al escojer una opción de menú se reciba por parámetro la nueva "slide".
//Definimos una variable con la función "useDispatch" de "redux" para poder enviar los atributos al "reducer".
//Definimos un objeto que recibirá la función "useSelector" que nos proporcionará el estado de página anterior (destructuring).
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Academic = () => {
  const dispatch = useDispatch();                         
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Academic" (3) le assignamos el cambio de página a "Summary" (2).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(2));
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Academic" (3) le assignamos el cambio de página a "Experience" (4).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(4));
      setLeave(0);
    }, 450);
  };
  //Retornamos en formato html los componentes que queremos renderizar del archivo "Academic".
  return (
    <div id="container6">
        <div id="container6__background"></div>
        <div id="container6__cover"></div>
        {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 3 (el componente
        entrarà por la iquierda) y si es menor a 3 (el componete entrara por la derecha) y, dependiendo 
        del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
        o el componente se deslizará saliendo por la izquierda (2) */}
        <div id="container6__academic" className={
            previous > 3 && leave === 0
            ? "in-left"
            : previous < 3 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
          {/* Definimos el los contenedores con la información del aprtado "Academic" */}
          <div id="container6__upgradehub">
            <div id="container6__date">
              <div id="container6__circle">
                <p>2022</p>
              </div>
            </div>
            <div id="container6__title">
              <h3>FULL-STACK DEVELOPMENT BOOTCAMP</h3>
              <div id="container6__school">
                <h4>UPGRADE HUB</h4>
                <p>/ Madrid - Remote</p>
              </div>
            </div>
          </div>
          <div id="container6__ub">
            <div id="container6__date">
              <div id="container6__circle">
                <p>2019</p>
              </div>
            </div>
            <div id="container6__title">
              <h3>ELECTRONICS AND TELECOMMUNICATIONS DEGREE</h3>
              <div id="container6__school">
                <h4>UNIVERSITY OF BARCELONA</h4>
                <p>/ Physics' Faculty</p>
              </div>
            </div>
          </div>
          <div id="container6__monitor">
            <div id="container6__date">
              <div id="container6__circle">
                <p>2013</p>
              </div>
            </div>
            <div id="container6__title">
              <h3>LEISURE AND FREE TIME INSTRUCTOR COURSE</h3>
              <div id="container6__school">
                <h4>GOVERNMENT OF CATALONIA</h4>
                <p>/ Lleida</p>
              </div>
            </div>
          </div>
          <div id="container6__english">
            <div id="container6__date">
              <div id="container6__circle">
                <p>2012</p>
              </div>
            </div>
            <div id="container6__title">
              <h3>ENGLISH LEVEL B2 - FIRST CERTIFICATE</h3>
              <div id="container6__school">
                <h4>OFFICIAL SCHOOL OF LANGUAGES (EOI)</h4>
                <p>/ Manresa</p>
              </div>
            </div>
          </div>
        </div>
        {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
        {/*"End" es el componente de footer que se renderizá dentro de "Academic" */}
        <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
        <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
        <End />
    </div>
  )
}

//Exportamos el archivo del "Academic" que posteriormente importaremos en el archivo "Slider.jsx".
export default Academic