//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Experience.jsx -> Componente información experiencia laboral del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Experience" creado en la carpeta src/components/Experience. 
import React, { useState } from 'react';
import End from '../End/End.jsx';
import '../../assets/uicons/css/uicons-regular-rounded.css';
import './Experience.css';

//Definimos una función flecha con los parámetros "onChangePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Experience = ({onChangePage, previous}) => {
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Experience" (4) le assignamos el cambio de página a "Academic" (3).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      onChangePage(3);
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Experience" (4) le assignamos el cambio de página a "Skills" (5).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      onChangePage(5);
      setLeave(0);
    }, 450);
  };

  //Retornamos en formato html los componentes que queremos renderizar del archivo "Experience".
  return (
    <div id="container7">
        <div id="container7__background"></div>
        <div id="container7__cover"></div>
        {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 4 (el componente
        entrarà por la iquierda) y si es menor a 4 (el componete entrara por la derecha) y, dependiendo 
        del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
        o el componente se deslizará saliendo por la izquierda (2) */}
        <div id="container7__experience" className={
            previous > 4 && leave === 0
            ? "in-left"
            : previous < 4 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
            {/* Definimos el los contenedores con la información del aprtado "Experience" */}
            <div id="container7__tavil">
              <div id="container7__top1">
                  <div id="container7__title1">
                    <h2>TAVIL IND S.A.U.</h2>
                  </div>
                  <div id="container7__data1">
                    <h4>2020-2022</h4>
                  </div>
              </div>
              <div id="container7__mid1">
                <h4>Automation & Robotics Programmer (Commissioning)</h4>
              </div>
              <div id="container7__bottom1">
                <p>Tavil is a leading technology company that designs, develops, 
                and produces customized solutions and turnkey projects internationally. 
                My role was as an automation and robotics programmer specializing in Automatic 
                packing lines, Pick & Place, and Palletizing during all phases of the project 
                (software/hardware design, programming in the company workshop, and 
                commissioning at the client’s business.</p>
              </div>
            </div>
            <div id="container7__linecont">
              <div id="container7__line"></div>
            </div>
            <div id="container7__cellnex">
            <div id="container7__top2">
                  <div id="container7__title2">
                    <h2>CELLNEX TELECOM</h2>
                  </div>
                  <div id="container7__data2">
                    <h4>2018-2020</h4>
                  </div>
              </div>
              <div id="container7__mid2">
                <h4>Telecommunications Techinician (Broadcast)</h4>
              </div>
              <div id="container7__bottom2">
                <p>Cellnex is the principal European operator of wireless telecommunications infrastructure. 
                My role was to support the engineering and provisioning sector of the Broadcast department, 
                calculating radio coverage and developing technical projects (PP/PV projects, wind energy parks, 
                emissions, legalization, impact studies, DTT, RD1066 certifications, and internal documentation).</p>
              </div>
            </div>
        </div>
        {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
        {/*"End" es el componente de footer que se renderizá dentro de "Experiece" */}
        <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
        <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
        <End />
    </div>
  )
}

//Exportamos el archivo del "Experience" que posteriormente importaremos en el archivo "Slider.jsx".
export default Experience