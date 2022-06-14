//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Contact.jsx -> Componente final para el contacto del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "Footer" creado en la carpeta src/componentes/Footer.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Contact" creado en la carpeta src/components/Contact.
//Importamos también la fotografia de perfil del usuario y los iconos para el contacto 
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import '../../assets/uicons/css/uicons-regular-rounded.css';
import Photo from '../../assets/images/photocv.JPG';
import Phone from '../../assets/redes/telefono.png';
import Mail from '../../assets/redes/mail.png';
import Point from '../../assets/redes/marcador.png';
import './Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha con los parámetros "onChangePage" y "previous" para que al presionar
//el botón triangulo se reciba por parámetro la nueva "slide" a la que debe ir la aplicación y 
//también cambiemos de página mediante un efecto de deslizamionto de la "slide" anterior. 
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Contact = () => {
  const dispatch = useDispatch();                         // es una forma distinta para obtener el dispatch en vez de usar connect
  const {previous} = useSelector(state => state);
  const [leave, setLeave] = useState(0);
  //Definimos una función flecha y le configuramos el estado en 1 ("slide" saliendo derecha).
  const onClickLeft = () => {
    setLeave(1);
    //Definimos una función flecha y le configuramos el estado en 0 ("slide" entrando derecha).
    //Como estamos en Contact (8) le assignamos el cambio de página anterior de "Projects" (7).
    //Realizamos un timeout para que la "slide" tenga tiempo de hacer el deslizamiento. 
    setTimeout(() => {
      dispatch(changePage(7));
      setLeave(0);
    }, 450);
  };
  //Retornamos en formato html los componentes que queremos renderizar del archivo "contact".
  return (
    <div id="container11">
        <div id="container11__background"></div>
        <div id="container11__cover"></div>
        {/* Definimos un contenedor con un ternario, si el atributo "previous" es menor de a 8 
        (el componente entrarà por la derecha) y, dependiendo del valor del atributo "leave" 
        (deslizamiento) el componente se deslizará saliendo por la derecha (1) */}
        <div  className={
            previous < 8 && leave === 0
            ? "in-right"
            : leave === 1
            ? "out-right"
            : null
        }>
        {/* Definimos el los contenedores con la información del aprtado "Contact" */}
        <div id="container11__contact">
          <div id="container11__profile">
            <div id="container11__photo">
              <img src={Photo} alt=""></img>
            </div>
            <div id="container11__links">
              <div><img src={Phone} alt=""></img><p>+34 639 911 113</p></div>
              <div><img src={Mail} alt=""></img><p>pau.nughy@gmail.com</p></div>
              <div><img src={Point} alt=""></img><p>Berga - Barcelona (Spain)</p></div>
            </div>
          </div>
          <div id="container11__forms">
            <form id="container11__form" action="mailto:pau.nughy@gmail.com" method='post' type="submit"> 
              <div id="container11__first">
                <label for="firstname"><strong>First Name</strong></label>
                <input type="text" id="firstname" name="firstname" placeholder="Enter first name"></input> 
              </div>
              <div id="container11__last">
                <label for="lastname"><strong>Last Name</strong></label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter last name"></input>
              </div>
              <div id="container11__email">
                <label for="email"><strong>Email</strong></label>
                <input type="email" id="email" name="email" placeholder="Enter email"></input>
              </div>
              <div id="container11__message">
                <label for="message"><strong>Message</strong></label>
                <textarea id="container11__area" type="text"  name="message" maxlength="300" placeholder="Write the reason for the contact in less than 300 characters please"></textarea>
              </div>
              <div id="container11__submit">
                <input type="submit" name="submit" value="Send form"></input>
              </div>
            </form>
          </div>
        </div>
        <Footer />
        </div>
        {/* Definimos el botón izquierdo que nos permitirá movernos por las "slides" */}
        <i id="lbutton" onClick={onClickLeft} className="fi fi-rr-angle-left"></i>
    </div>
  )
}

//Exportamos el archivo del "Contact" que posteriormente importaremos en el archivo "Slider.jsx".
export default Contact;