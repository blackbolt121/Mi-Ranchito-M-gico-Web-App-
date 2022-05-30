import {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import "../css/Index.css";
const Index = () => {
    return <Fragment>
        <Header/>
        <div className={"index_hero"}>
            <img src={"https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/03/pueblos-magicos-romanticos.jpg?fit=2800%2C1791&ssl=1"} alt={"ajka"}/>
            <div className={"index_hero--content"}>
                <h3>Visita pueblos mágicos</h3>
                <Link to={"/go"}>Conoce más</Link>
            </div>
        </div>
        <div className={"index_hero"}>
            <img src={"https://blog.vivaaerobus.com/wp-content/uploads/2020/04/Pueblos-Magicos-Cerca-de-CDMX.jpg"} alt={"ajka"}/>
            <div className={"index_hero--content"}>
                <h3>Descubre que puedes hacer</h3>
                <Link to={"/todo"}>Descubre</Link>
            </div>
        </div>

    </Fragment>
}
export default Index;
