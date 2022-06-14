//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Home.jsx -> Componente que engloba dos componentes (Presentation + Footer).

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "Footer" creado en la carpeta src/componentes/Footer.
//Importamos el componente "Presentation" creado en la carpeta src/componentes/Presentation.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Home" creado en la carpeta src/components/Home. 
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Presentation from "../Presentation/Presentation";
import "../../assets/uicons/css/uicons-regular-rounded.css";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha con los parámetros "dispatch(changePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Home = () => {
  const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickRight = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en Home (1) le assignamos el cambio de página siguiente de "Summary" (2).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento. 
    setTimeout(() => {
      dispatch(changePage(2));
      setLeave(0);
    }, 450);
  };

  //Retornamos en formato html los componentes que queremos renderizar del archivo "home".
  return (
    <>
    {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 1 
    (el componente entrarà por la iquierda) y, dependiendo del valor del atributo "leave" 
    (deslizamiento) el componente se deslizará saliendo por la izquierda (1) */}
      <div className={
          previous > 1 && leave === 0
          ? "in-left"
          : leave === 1
          ? "out-left"
          : "null"
      }>
      {/*"Presentation" y "Footer" son los componentes que se renderizan dentro de "Home" */}
        <Presentation />
        <Footer />
      </div>
      {/* Definimos el botón derecho que nos permitirá movernos por las "slides" */}
      <div id="background"></div>
      <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
    </>
  );
};

//Exportamos el archivo del "Home" que posteriormente importaremos en el archivo "Slider.jsx".
export default Home;
