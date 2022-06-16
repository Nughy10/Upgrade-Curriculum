//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Contact.jsx -> Componente final para el contacto del usuario.

//Importamos la libreria "React" que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos el hook de estado "useState" que se encarga de actualizar las variables que indiquemos. 
//Importamos el componente "Footer" creado en la carpeta src/componentes/Footer.
//Importamos también la fotografia de perfil del usuario y los iconos para el contacto.
//Importamos los diferentes icones en su formato correspondiente de la carpeta src/assets. 
//Importamos el archivo de diseño "Contact" creado en la carpeta src/components/Contact.
//La función "useDispatch" es una función de "redux" que se encarga de enviar los atributos al "reducer".
//La función "useSelector" es una función de "redux" que se encarga de proporcionarnos el estado de página actu
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import '../../assets/uicons/css/uicons-regular-rounded.css';
import Photo from '../../assets/images/photocv.JPG';
import Phone from '../../assets/redes/telefono.png';
import Mail from '../../assets/redes/mail.png';
import Point from '../../assets/redes/marcador.png';
import CVen from '../../assets/cv/CV-English.pdf'
import CVes from '../../assets/cv/CV-Spanish.pdf'
import './Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/page/page.actions';

//Definimos una función flecha para que al presionar el botón triangulo se reciba por parámetro la nueva "slide".
//Definimos una función flecha para que al escojer una opción de menú se reciba por parámetro la nueva "slide".
//Definimos una variable con la función "useDispatch" de "redux" para poder enviar los atributos al "reducer".
//Definimos un objeto que recibirá la función "useSelector" que nos proporcionará el estado de página anterior (destructuring).
//Definimos una variable "useState" con el parámetro "leave" y la función "setLeave" (inicialización en "0"). 
//este estado activará la classe que contiene la animación de deslizamiento según entre o salga la "slide".
const Contact = () => {
  const dispatch = useDispatch();                         
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
              <div id="container11__pdf">
              <a href={CVen} download="CV (en) - Pau Isach Noguera"><button>Download CV (English)</button></a>
              <a href={CVes} download="CV (es) - Pau Isach Noguera"><button>Download CV (Spanish)</button></a>
              </div>
              <div id="container11__src">
                <div><img src={Phone} alt=""></img><p>+34 639 911 113</p></div>
                <div><img src={Mail} alt=""></img><p>pau.nughy@gmail.com</p></div>
                <div><img src={Point} alt=""></img><p>Berga - Barcelona (Spain)</p></div>
              </div>
            </div>
          </div>
          <div id="container11__forms">
            {/* Definimos una función que resetea los campos del formulario con un "timeout" para que de tiempo a enviar el email */}
            <form id="container11__form" action="mailto:pau.nughy@gmail.com" method="post" enctype="text/plain" onSubmit={(e) => {
                setTimeout(() => {
                  e.target.reset()
                }, 1000);  
              }}>
              <div id="container11__first">
                <label htmlFor="firstname"><strong>First Name</strong></label>
                <input type="text" id="firstname" name="firstname" placeholder="Enter first name"></input> 
              </div>
              <div id="container11__last">
                <label htmlFor="lastname"><strong>Last Name</strong></label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter last name"></input>
              </div>
              <div id="container11__email">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" id="email" name="email" placeholder="Enter email"></input>
              </div>
              <div id="container11__message">
                <label htmlFor="message"><strong>Message</strong></label>
                <textarea id="container11__area" type="text"  name="message" maxLength="300" placeholder="Write the reason for the contact in less than 300 characters please"></textarea>
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