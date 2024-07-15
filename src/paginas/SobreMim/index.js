import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/coffee.jpg";
import fotoSobreMim from "assets/laptop.jpg";

function SobreMim(){
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Maisa!
            </h3>
            <p className={styles.paragrafo}>
                Meu nome é Maisa de Oliveira Silva, tenho 22 anos e no ano de 2022 iniciei minha graduação em Engenharia de Software. Decidi entrar em uma graduação após momentos difíceis vivenciados duarante a pandemia de Covd em 2019. Nessa época encontrei na tecnologia forças para continuar a seguir em frente.
            </p>
            <p className={styles.paragrafo}>
                Logo no primeiro ano de faculdade, me encontrei no universo do Front-end, percebendo que esse era o campo do imenso universo da técnologia em que gostaria de me aprofundar. Comecei, então, meus estudos focados em HTML e CSS, posteriormnente passando para Javascript, suas bibliotecas e frameworks. Quanto mais me aprofundo nesse ramo, mais me indentifico e meu amor pelo Front-end apenas aumenta.
            </p>
            <p className={styles.paragrafo}>
                    Sou uma estudante em busca do primeiro estágio na área de desenvolvimento de aplicações web.
                    Demonstro grande organização com planejamento de atividades e calma. Lido com
                    clientes diversos, sempre buscando entender seus desejos e encontrando a melhor
                    solução para atendê-los. Sou uma pessoa bastante curiosa e interessada em
                    aprender novas habilidades e trazer valor para a empresa com o meu trabalho. Vamos conversar?
            </p>
            <img src={fotoSobreMim} alt="Desenho de um laptop" className={styles.fotoSobreMim}/>
            <h3 className={styles.topico}> Formação </h3>
            <ul>
                <li className={styles.item}>INSTITUIÇÃO DE ENSINO: Centro Universitário Internacional- UNINTER</li>
                <li className={styles.item}>LOCAL DAINSTITUIÇÃO DE ENSINO: Resende, RJ</li>
                <li className={styles.item}>DIPLOMA: Bacharelado em Engenharia de Software</li>
                <li className={styles.item}>SITUAÇÃO: Cursando</li>
                <li className={styles.item}>DATA DE INÍCIO: Fevereiro de 2022</li>
                <li className={styles.item}>DATA DO TÉRMINO: Fevereiro de 2026</li>
            </ul>
            <h3 className={styles.topico}>Conhecimentos</h3>
            <ul>
                <li className={styles.item}>Conhecimentos intermediários nas tecnologias HTML, CSS e Javascript;</li>
                <li className={styles.item}>Conhecimentos básicos em Node.js;</li>
                <li className={styles.item}>Conhecimentos básicos em gestão de projetos;</li>
                <li className={styles.item}>Conhecimentos sobre os ciclos de desenvolvimento de software;</li>
                <li className={styles.item}>Conhecimentos sobre engenharia de requisitos;</li>
                <li className={styles.item}>Conhecimentos sobre a ferramenta de design Figma;</li>
                <li className={styles.item}>Conhecimentos básicos em bancos de dados relacionais e NoSQL;</li>
                <li className={styles.item}>Conhecimento básicos em desenvolvimento de gráficos com Python;</li>
                <li className={styles.item}>Conhecimentos básicos no desenvolvimento de aplicações web combibliotecas React;</li>
                <li className={styles.item}>Cursos de HTML e CSS para aplicações web pela Alura;</li>
                <li className={styles.item}>Cursos de Javascript para aplicações web pela Alura;</li>
                <li className={styles.item}>Curso de React Native com foco em utilização de Hooks pela Alura;</li>
                <li className={styles.item}>Cursos de React pela Alura; e</li>
                <li className={styles.item}>Cursos de Javascript com foco em back-end pela Alura.</li>
            </ul>
        </PostModelo>
    )
}

export default SobreMim;