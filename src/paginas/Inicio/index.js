
import Post from "componentes/Post";
import styles from "./Inicio.module.css";
import posts from "json/posts";

function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => <li key={post.id}> 
                 <Post post={post} />    
                 </li>)}
            </ul>    
    )
}
export default Inicio;