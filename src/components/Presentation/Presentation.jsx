//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Presentation.jsx -> Componente información principal de la aplicación (Home).

//Importamos el archivo de diseño "Presentation" creado en la carpeta src/components/Presentation.
import "./Presentation.css";

//Definimos una función flecha y le retornamos el contenedor para la "presentation".
const Presentation = () => {
    return (
        <div id="container2">
            <div id="container2__anim">
                <h1 id="container2__info" className="color-anim">Hello!</h1>
                <h1 id="container2__info">I'm Pau Isach Noguera</h1>
            </div>
            <h6 id="container2__info">Welcome to MyPortfolio | CV</h6>
            <h3 id="container2__info">Full-Stack Developer</h3>
            <h3 id="container2__info">Electronics & Telecommunications Engineer</h3>
        </div>
    )
}

//Exportamos el archivo del "header" que posteriormente importaremos en el archivo "Slider.jsx".
export default Presentation;