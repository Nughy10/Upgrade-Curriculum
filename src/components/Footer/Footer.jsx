//PROYECTO REACT -> CURRÍCULUM VITAE | PORTFOLIO.

//Footer.jsx -> Componente enlaces principales de la aplicación (Home).

//Importamos el archivo de diseño "Footer" creado en la carpeta src/components/Footer.
//Importamos las diferentes fotografias en formato png de la carpeta src/assets. 
import "./Footer.css";
import linkedin from '../../assets/redes/linkedin.png';
import github from '../../assets/redes/github.png';
import dropbox from '../../assets/redes/dropbox.png';
import skype from '../../assets/redes/skype.png';
import discord from '../../assets/redes/discord.png';
import teams from '../../assets/redes/teams.png';

//Definimos una función flecha y le retornamos el contenedor para el "footer".
const Footer = () => {
    return (
        <footer id="container3">
            <a id="container3__icon" href="https://www.linkedin.com/in/pau-isach-noguera-534087195/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""></img></a>
            <a id="container3__icon" href="https://github.com/Nughy10" target="_blank" rel="noopener noreferrer"><img src={github} alt=""></img></a>
            <a id="container3__icon" href="https://www.dropbox.com/h" target="_blank" rel="noopener noreferrer"><img src={dropbox} alt=""></img></a>
            <a id="container3__icon" href="https://web.skype.com/" target="_blank" rel="noopener noreferrer"><img src={skype} alt=""></img></a>
            <a id="container3__icon" href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer"><img src={discord} alt=""></img></a>
            <a id="container3__icon" href="https://teams.live.com/_#/conversations/?ctx=chat" target="_blank" rel="noopener noreferrer"><img src={teams} alt=""></img></a>
        </footer>
    )
}

export default Footer;