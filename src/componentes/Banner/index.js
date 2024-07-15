import styles from './Banner.module.css';
import circulo from 'assets/circuloColorido.svg';
import minhaFoto from 'assets/minhaFoto.jpg';

function Banner() {

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <h2 className={styles.titulo_secundario}>
                    Boas vindas ao meu espaço pessoal!
                </h2>
                <p className={styles.paragrafo}>
                    Aqui apresento meu portifólio e alguns artigos sobre tecnologia.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} 
                src={circulo}
                aria-hidden={true}
                />
                <img className={styles.minhaFoto} 
                src={minhaFoto}
                alt='Foto da Maisa Oliveira sorrindo'
                />
            </div>
        </div>
    )
}

export default Banner;