//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Slider.jsx -> Componente que nos permite cambiar de "slide" en l'aplicación.

//Importamos la libreria React que se encarga su configuración, todos los archivos JSX deben tenerlo.
//Importamos TODAS las variables que tienen como referencia una "slide" individual. 
import React from 'react';
import Home from '../Home/Home';
import Summary from '../Summary/Summary';
import Academic from '../Academic/Academic';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Licences from '../Licences/Licences';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

//Definimos una función flecha con los parámetros "page", "onChangePage" y "previous" 
//para poder pasarlos como propiedades (props) a las diferentes "slides" (excepto "page").
//Definimos un "Switch Case" que dependerá de la "slide" en la que nos encontremos (page).
const Slider = ({page, onChangePage, previous }) => {
    switch (page) {
        case 1:
            return (
                <Home onChangePage={onChangePage} previous={previous} />
            );
        case 2:
            return (
                <Summary onChangePage={onChangePage} previous={previous} />
            );
        case 3:
            return (
                <Academic onChangePage={onChangePage} previous={previous} />
            );
        case 4:
            return (
                <Experience onChangePage={onChangePage} previous={previous} />
            );
        case 5:
            return (
                <Skills onChangePage={onChangePage} previous={previous} />
            );
        case 6:
            return (
                <Licences onChangePage={onChangePage} previous={previous} />
            );
        case 7:
            return (
                <Projects onChangePage={onChangePage} previous={previous} />
            );
        case 8:
            return (
                <Contact onChangePage={onChangePage} previous={previous} />
            );

        default:
            return (
                <Home  onChangePage={onChangePage} previous={previous} />
            );
    }
}

//Exportamos el archivo del "Slider" que posteriormente importaremos en el archivo "app.jsx".
export default Slider