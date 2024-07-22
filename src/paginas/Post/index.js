import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";

function Post(){
    const parametros = useParams();
    {/*useParams pega os parâmetro definidos depois dos : do routes.js */}
    {/*useParams retorna um objeto de pares chave/valor dos parâmetros dinâmicos da URL atual */}
    const post = posts.find(post => post.id === Number(parametros.id));

    return (
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            {/*Para poder estilizar um texto escrito em Marckdown, foi necessário utilizar o CSS "normal" */}
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}
export default Post;