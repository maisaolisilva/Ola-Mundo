import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

function MenuLink({ path, texto }){
    const localizacao = useLocation();

 return (
    <Link className={`
        ${styles.link} 
        ${localizacao.pathname === path ? styles.linkDestacado : ''}
        `} to={path}> {texto} </Link>
 )
}

export default MenuLink;