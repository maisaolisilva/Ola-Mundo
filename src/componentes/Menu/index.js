
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";


function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink path="/" texto="Início" />
                <MenuLink path="/sobremim" texto="Sobre Mim" />
                <MenuLink path="/javascript" texto="JavaScript" />
                <MenuLink path="/naruto" texto="Naruto" />
            </nav>
        </header>
    )
}

export default Menu;