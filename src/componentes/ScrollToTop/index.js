import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/*Faz com que a parra de rolagem vá la pra cima novamente sempre que se mudar a rota */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}