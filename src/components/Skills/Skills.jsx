//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Skillsjsx -> Componente información Hard & Soft skills del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Experience" creado en la carpeta src/components/Experience.
import React, { useState } from "react";
import End from "../End/End.jsx";
import "../../assets/uicons/css/uicons-regular-rounded.css";
import "./Skills.css";

//Definimos una función flecha con los parámetros "onChangePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Skills = ({ onChangePage, previous }) => {
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Skills" (5) le assignamos el cambio de página a "Experience" (4).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      onChangePage(4);
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Skills" (5) le assignamos el cambio de página a "Licences" (6).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      onChangePage(6);
      setLeave(0);
    }, 450);
  };

  //Retornamos en formato html los componentes que queremos renderizar del archivo "Experience".
  return (
    <div id="container8">
      <div id="container8__background"></div>
      <div id="container8__cover"></div>
      {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 5 (el componente
        entrarà por la iquierda) y si es menor a 5 (el componete entrara por la derecha) y, dependiendo 
        del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
        o el componente se deslizará saliendo por la izquierda (2) */}
      <div className={
            previous > 5 && leave === 0
            ? "in-left"
            : previous < 5 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
        {/* Definimos el los contenedores con la información del aprtado "Skills" */}
        <div id="container8__skills">
          <div id="container8__programs">
            <h3>LANGUAGES & PROGRAMS</h3>
            <div id="container8__stack">
              <h4>FULL-STACK PROGRAMMING</h4>
              <p>
                HTML & CCS / JavaScript / Angular / React / PHP / Symfony / SQL
                (MySQL) / Node / MongoDB / Agile (SCRUM) / Git / Doker.
              </p>
            </div>
            <div id="container8__degree">
              <h4>ELECTRONICS AND TELECOMMUNICATIONS</h4>
              <p>
                Java / Phyton / C++ / Verilog / Multisim / Matlab / LabView /
                Arduino / LT Spice / DSpark.
              </p>
            </div>
            <div id="container8__robot">
              <h4>AUTOMATION AND ROBOTICS</h4>
              <p>
                ABB / KUKA/ FANUC / Siemens / B&R / Sick / Bihl Wiedemann /
                SCADA / IoT.
              </p>
            </div>
          </div>
        </div>
        <div id="container8__linecont">
          <div id="container8__line"></div>
        </div>
        <div id="container8__other">
          <div id="container8__idioms">
            <h3>IDOMS</h3>
            <p>Catalan (Native)</p>
            <p>Spanish (Native)</p>
            <p>English (Intermediate - High)</p>
            <p>Italian (Basic) / French (Basic)</p>
          </div>
          <div id="container8__technical">
            <h3>TECHNICAL SKILLS</h3>
            <p>Full-Stack Programming</p>
            <p>Electronics & Telecommunications</p>
            <p>Automation & Robotics </p>
            <p>Physics and Mathematics</p>
            <p>Project Management</p>
          </div>
          <div id="container8__soft">
            <h3>SOFT SKILLS</h3>
            <p>Organization</p>
            <p>Observation</p>
            <p>Adaptation</p>
            <p>Self-improvement</p>
          </div>
        </div>
      </div>
      {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
      {/*"End" es el componente de footer que se renderizá dentro de "Skills" */}
      <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
      <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
      <End />
    </div>
  );
};

//Exportamos el archivo del "Skills" que posteriormente importaremos en el archivo "Slider.jsx".
export default Skills;
