import "./Post.css";
import { Routes, Route, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

function Post(){
    const parametros = useParams();
    {/*useParams pega os parâmetro definidos depois dos : do routes.js */}
    {/*useParams retorna um objeto de pares chave/valor dos parâmetros dinâmicos da URL atual */}
    const post = posts.find(post => post.id === Number(parametros.id));
    if (!post) {
        return <NaoEncontrada />
    }

    const recomendados = posts.filter(post => post.id != parametros.id).slice(0, 4);


    return (

        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                            {/*Para poder estilizar um texto escrito em Marckdown, foi necessário utilizar o CSS "normal" */}
                            <div className="post-markdown-container">
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>
                        </PostModelo>
                        <div className="recomendados">
                            <h3>Outros posts que você pode gostar:</h3>
                            <ul className="posts-recomendados">
                                {recomendados.map(post => <li key={post.id}> <PostCard post={post} /></li>)}
                            </ul>
                        </div>
                    </>
                } />
            </Route>
        </Routes>
    )
}
export default Post;