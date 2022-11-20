import Header from "./Header";

import "../css/ToDo.css"
import {Link} from "react-router-dom";

const Card = (props) => {
    return <>
        <div className={"card"}>
            <div className={"card-body"}>
                <img className={"card-img"} src={props.img}/>
                <h1 className={"card-title card-title2"}><i className={props.icon}></i>{props.title}</h1>
                <p className={"card-text"}>{props.description}</p>
                <Link to={"/dashboard"}>Ir</Link>
            </div>
        </div>
    </>
}
Card.defaultProps = {
    img: "",
    title: "Any title can be here!!!",
    icon: "",
    description: "Any desription here!!!!"
}

class ToDoItem{
    constructor(img,title,icon,description) {
        this.img = img
        this.title = title
        this.icon = icon
        this.description = description
    }
}

const ToDo = (props) => {

    const data = [
        new ToDoItem(
            "https://lamenteesmaravillosa.com/wp-content/uploads/2020/12/mujer-mochila-lago-768x512.jpg",
            "Explora",
            "fa-solid fa-compass card_icon_color",
            "Explora y conoce la magia que te aguarda en cada destino"),
        new ToDoItem(
            "https://cdn.forbes.com.mx/2020/10/Tzintzuntzan-Pueblo-Ma%CC%81gico-1-1-1024x683.jpg",
            "Descubre",
            "fa-solid fa-globe card_icon_color",
            "Descubre nuevas experiencias y tradiciones como nunca"
        ),
        new ToDoItem(
            "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/11/cd72ac58-4982-44ff-b631-0f3483ddb432.jpeg?fit=960%2C720&ssl=1",
            "Recuerda",
            "fa-sharp fa-solid fa-location-dot card_icon_color",
            "Vive nuevas experiencias y hazlos momentos inolvidables de la magia que rodea a México"
        ),
        new ToDoItem(
            "https://foodandtravel.mx/wp-content/uploads/2017/10/sopaTarascaFT.jpg",
            "Disfruta",
            "fa-sharp fa-solid fa-location-dot card_icon_color",
            "Disfruta y prueba las delicias que tienen Mexico en su gastronomía"
        )
    ]

    return <>
        <Header/>
        <div className={"card_container"}>
            {data.map( x => <Card img={x.img} title={x.title} icon={x.icon} description={x.description}/>)}
        </div>
    </>
}
export default ToDo;
