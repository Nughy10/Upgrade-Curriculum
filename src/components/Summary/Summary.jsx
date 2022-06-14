//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Summary.jsx -> Componente información resumen de usuario Summary.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Summary" creado en la carpeta src/components/Summary. 
import React, { useState } from "react";
import End from "../End/End.jsx";
import "../../assets/uicons/css/uicons-regular-rounded.css";
import "./Summary.css";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha con los parámetros "onChangePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Summary = () => {
  const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Summary" (2) le assignamos el cambio de página a "Home" (1).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(1));
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Summary" (2) le assignamos el cambio de página a "Academic" (3).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(3));
      setLeave(0);
    }, 450);
  };

  //Retornamos en formato html los componentes que queremos renderizar del archivo "Summary".
  return (
    <div id="container4">
      <div id="container4__background"></div>
      <div id="container4__cover"></div>
      {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 2 (el componente
      entrarà por la iquierda) y si es menor a 2 (el componete entrara por la derecha) y, dependiendo 
      del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
      o el componente se deslizará saliendo por la izquierda (2) */}
      <div id="container4__summary" className={
            previous > 2 && leave === 0
            ? "in-left"
            : previous < 2 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
        {/* Definimos el los contenedores con la información del aprtado "Summary" */}
        <div id="container4__summary--resum">
          <p>
            Engineer with scientific and technological skills and experience
            aimed at a versatile sector related to the world of programming.
          </p>
          <p>
            Flexible and creative professional with the ability to conceive,
            design and develop any project related to computer software.
          </p>
        </div>
        <div id="container4__line"></div>
        <div id="container4__summary--objective">
          <p>
            Contribute positively to the company with personal evolution in the
            workplace as the main professional objective.
          </p>
          <p>
            Being part of a work team with common values such as commitment,
            effort, honesty, respect, responsibility, valuing initiative,
            creativity, and determination.
          </p>
        </div>
      </div>
      {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
      {/*"End" es el componente de footer que se renderizá dentro de "Summary" */}
      <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
      <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
      <End />
    </div>
  );
};

//Exportamos el archivo del "Summary" que posteriormente importaremos en el archivo "Slider.jsx".
export default Summary;
