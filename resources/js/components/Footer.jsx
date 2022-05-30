import {Fragment} from "react";
import {Link} from "react-router-dom";

export default function Footer (){
    return <Fragment>
        <footer>
            <div className="footer-nav">
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li>
                            <Link to={"/go"}>Donde Ir</Link>
                        </li>
                        <li>
                            <Link to={"/todo"}>Qué Hacer</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>&copy; Todos los derechos reservados</p>
            </div>
        </footer>
    </Fragment>
}
