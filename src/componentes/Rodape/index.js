import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marcaRegistrada.svg";
function Rodape() {
 return(
    <footer className={styles.rodape}>
        <MarcaRegistrada />

        Desenvolvido por Maisa.
    </footer>
 )
}
export default Rodape;