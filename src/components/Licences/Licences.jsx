//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Licencesjsx -> Componente información sobre licencias del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "End" creado en la carpeta src/componentes/End.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Licences" creado en la carpeta src/components/Licences.
import React, { useState } from 'react';
import End from '../End/End.jsx';
import '../../assets/uicons/css/uicons-regular-rounded.css';
import './Licences.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha con los parámetros "onChangePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Licences = () => {
  const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo izquierda).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando izquierda).
    //Como estamos en "Licences" (6) le assignamos el cambio de página a "Projects" (7).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(5));
      setLeave(0);
    }, 450);
  };
  //Definimos una función flecha y le configuramos el estado en 2 ("slide" saliendo derecha).
  const onClickRight = () => {
    setLeave(2);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en "Licences" (6) le assignamos el cambio de página a "Projects" (7).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento.
    setTimeout(() => {
      dispatch(changePage(7));
      setLeave(0);
    }, 450);
  };
  //Retornamos en formato html los componentes que queremos renderizar del archivo "Licences".
  return (
    <div id="container9">
        <div id="container9__background"></div>
        <div id="container9__cover"></div>
        {/* Definimos un contenedor con un ternario, si el atributo "previous" es mayor de a 6 (el componente
        entrarà por la iquierda) y si es menor a 6 (el componete entrara por la derecha) y, dependiendo 
        del valor del atributo "leave" (deslizamiento) el componente se deslizará saliendo por la derecha (1)
        o el componente se deslizará saliendo por la izquierda (2) */}
        <div id="container9__licences" className={
          previous > 6 && leave === 0
            ? "in-left"
            : previous < 6 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : leave === 2
            ? "out-left"
            : null
        }>
          {/* Definimos el los contenedores con la información del aprtado "Licences" */}
          <div id="container9__br">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>Automation Studio Control / Motion & Visual Components</h4>
              <p> - B&R Industrial Automation.</p>
            </div>
          </div>
          <div id="container9__abb">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>IRC5 / Pick Master 3.0</h4>
              <p> - ABB.</p>
            </div>
          </div>
          <div id="container9__kuka">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>KUKA Robots Programming P1 & P2</h4>
              <p> - Kuka.</p>
            </div>
          </div>
          <div id="container9__fanuc">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>IRPickTool & IRVision / TPE Programming</h4>
              <p> - Fanuc.</p>
            </div>
          </div>
          <div id="container9__siemens">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>AS-I 3.0 & AS-I Safety</h4>
              <p> - Bihl + Wiedemann.</p>
            </div>
          </div>
          <div id="container9__french">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2020</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>French Course</h4>
              <p> - Tavil IND S.A.U.</p>
            </div>
          </div>
          <div id="container9__italian">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2012</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>Italian Course</h4>
              <p> - Logos Language Academy.</p>
            </div>
          </div>
          <div id="container9__english">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2011</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>General English Course, B1 Threshold level (CoE)</h4>
              <p> - The Inlingua School of Languages (Malta).</p>
            </div>
          </div>
          <div id="container9__exchange">
            <div id="container9__date">
              <div id="container9__circle">
                <p>2009</p>
              </div>
            </div>
            <div id="container9__school">
              <h4>English Exchange</h4>
              <p> - IES Guillem of Bergueda with Västervik Institute (Sweden).</p>
            </div>
          </div>
        </div>
        {/* Definimos el botón derecho y izquierdo que nos permitiran movernos por las "slides" */}
        {/*"End" es el componente de footer que se renderizá dentro de "Licences" */}
        <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
        <i id="rbutton" onClick={onClickRight} className="fi fi-rr-angle-right"></i>
        <End />
    </div>
  )
}

//Exportamos el archivo del "Licences" que posteriormente importaremos en el archivo "Slider.jsx".
export default Licences;