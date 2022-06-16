//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Projects.jsx -> Componente información sobre los proyectos del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Projects" creado en la carpeta src/components/Projects.
//La función "useDispatch" es una función de "redux" que se encarga de enviar los atributos al "reducer".
//La función "useSelector" es una función de "redux" que se encarga de proporcionarnos el estado de página actu
import React, { useState } from 'react';
import End from '../End/End.jsx';
import projectLaser from '../../assets/images/laser.gif';
import projectSorry from '../../assets/images/sorry.jpg'
import '../../assets/uicons/css/uicons-regular-rounded.css';
import './Projects.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha para que al presionar el botón triangulo se reciba por parámetro la nueva "slide".
//Definimos una función flecha para que al escojer una opción de menú se reciba por parámetro la nueva "slide".
//Definimos una variable con la función "useDispatch" de "redux" para poder enviar los atributos al "reducer".
//Definimos un objeto que recibirá la función "useSelector" que nos proporcionará el estado de página anterior (destructuring).
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Projects = () => {
  const dispatch = useDispatch();                         
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Projects" (7) le assignamos el cambio de página a "Contact" (8).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(6));
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Projects" (7) le assignamos el cambio de página a "Contact" (8).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(8));
      setLeave(0);
    }, 450);
  };
  //Retornamos en formato html los componentes que queremos renderizar del archivo "Projects".
  return (
    <div id="container10">
        <div id="container10__background"></div>
        <div id="container10__cover"></div>
        {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 7 (el componente
        entrarà por la iquierda) y si es menor a 7 (el componete entrara por la derecha) y, dependiendo 
        del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
        o el componente se deslizará saliendo por la izquierda (2) */}
        <div id="container10__projects" className={
            previous > 7 && leave === 0
            ? "in-left"
            : previous < 7 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
          {/* Definimos el los contenedores con la información del aprtado "Projects" */}
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >
          <div id="container10__project">
            <img id="container10__image" src={projectLaser} alt="" />
            <div id="container10__hover">
              <h3>LASER "LIGHT SHOW"</h3>
              <p>Design and implementation of a laser connected to two galvanometric motors controlled by 
              Arduino (SPI protocol) through an interconnection bord made exclusively for this project (Design Spark) 
              and managed by an external user interface (Windows Forms Application - Microsoft Visual Studio).</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
          <a href="https://es.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          <div id="container10__project">
          <img id="container10__image" src={projectSorry} alt="" />
            <div id="container10__hover">
              <h3>PROJECT NO AVALIABLE</h3>
              <p>The project is not uploaded or done at the moment. Sorry for the inconvenience.</p>
            </div>
          </div>
          </a>
        </div>
        {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
        {/*"End" es el componente de footer que se renderizá dentro de "Projects" */}
        <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
        <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
        <End />
    </div>
  )
}

//Exportamos el archivo del "Projects" que posteriormente importaremos en el archivo "Slider.jsx".
export default Projects;