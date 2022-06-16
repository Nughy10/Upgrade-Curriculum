//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Slider.jsx -> Componente que nos permite cambiar de "slide" en l'aplicación.

//Importamos la libreria React que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos TODAS las variables que tienen como referencia una "slide" individual. 
//La función "useSelector" es una función de "redux" que se encarga de proporcionarnos el estado de página actual.
import React from 'react';
import Home from '../Home/Home';
import Summary from '../Summary/Summary';
import Academic from '../Academic/Academic';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Licences from '../Licences/Licences';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

//Definimos una función flecha y definimos un objeto que recibirá la función "useSelector" 
//que nos proporcionará el estado de página actual (destructuring) de la aplicación. 
//Definimos un "Switch Case" que dependerá de la "slide" en la que nos encontremos (page).
const Slider = () => {
    const {page} = useSelector(state => state) 
    switch (page) {
        case 1:
            return (
                <Home />
            );
        case 2:
            return (
                <Summary />
            );
        case 3:
            return (
                <Academic />
            );
        case 4:
            return (
                <Experience />
            );
        case 5:
            return (
                <Skills />
            );
        case 6:
            return (
                <Licences />
            );
        case 7:
            return (
                <Projects />
            );
        case 8:
            return (
                <Contact />
            );

        default:
            return (
                <Home  />
            );
    }
}

//Exportamos el archivo del "Slider" que posteriormente importaremos en el archivo "app.jsx".
export default Slider