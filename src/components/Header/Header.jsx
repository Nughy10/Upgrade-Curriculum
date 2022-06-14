//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO. 

//Header.jsx -> Componente menú principal de la aplicación (Home).

//Importamos el archivo de diseño "Header" creado en la carpeta src/components/Header.
import "./Header.css";

//Definimos una función flecha con los parámetros "page" y "onChangePage" para que al escojer
//una opción de menu se reciba por parámetro la nueva "slide" a la que debe ir la aplicación.
const Header = ({page, onChangePage}) => {
    //Definimos una función "Home" para redireccionarnos si escoquemos esta opción y lo retornamos. 
    const toHome = () => {
        return onChangePage(1)
    }
    //Definimos una función "Summary" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toSummary = () => {
        return onChangePage(2)
    }
    //Definimos una función "Academic" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toAcademic = () => {
        return onChangePage(3)
    }
    //Definimos una función "Experience" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toExperience = () => {
        return onChangePage(4)
    }
    //Definimos una función "Skills" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toSkills = () => {
        return onChangePage(5)
    }
    //Definimos una función "Licences" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toLicences = () => {
        return onChangePage(6)
    }
    //Definimos una función "Projects" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toProjects = () => {
        return onChangePage(7)
    }
    //Definimos una función "Contact" para redireccionarnos si escogemos esta opción y lo retornamos. 
    const toContact = () => {
        return onChangePage(8)
    }
    //Retornamos el contenedor para el "header" con un listado de nombres relacionados con las funciones anteriores. 
    //Configuramos un ternario que nos sirve para saber en qué página nos encontramos y posteriormente nos 
    //redirecciona a la página correcta según el elemento de la lista del "header" que hayamos escogido (onClick).
    return (
        <header id="container1">
                <ul id="container1__list">
                    <li onClick={toHome} className={page === 1 ? "statichome" : "smoothscroll"}>Home</li>
                    <li onClick={toSummary} className={page === 2 ? "statichome" : "smoothscroll"}> Summary </li>
	                <li onClick={toAcademic} className={page === 3 ? "statichome" : "smoothscroll"}> Academic </li>
                    <li onClick={toExperience} className={page === 4 ? "statichome" : "smoothscroll"}> Experience </li>
                    <li onClick={toSkills} className={page === 5 ? "statichome" : "smoothscroll"}> Skills </li>
                    <li onClick={toLicences} className={page === 6 ? "statichome" : "smoothscroll"}> Licences </li>
                    <li onClick={toProjects} className={page === 7 ? "statichome" : "smoothscroll"}> Projects </li>
                    <li onClick={toContact} className={page === 8 ? "statichome" : "smoothscroll"}> Contact </li>
                </ul>
        </header>
    )
}

//Exportamos el archivo del "header" que posteriormente importaremos en el archivo "app.jsx".
export default Header;