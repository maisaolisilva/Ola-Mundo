import styles from "./Botao.module.css";
function BotaPrincipal({ children, tamanho }) {
    return <button className={`
        ${styles.botao}
        ${styles[tamanho]}
    `}>{children}</button>
}

export default BotaPrincipal;