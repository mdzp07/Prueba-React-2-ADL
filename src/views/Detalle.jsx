import { useContext } from "react";
import MyContext from "../MyContext";
import { useParams } from "react-router-dom";
import '../css/Detalle.css'

export default function Detalle() {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);
    const { setCarrito } = useContext(MyContext);

    const pizza = pizzas.filter(pizza => pizza.id === id)[0];

    const agregarAlCarrito = (pizza) => {
        setCarrito((addCarrito) => [...addCarrito, pizza]);
    };

    return (
        <div>
            <div className="card-detalle" key={pizza.id}>
                <img src={pizza.img} alt="" />
                <section>
                    <h4>{pizza.name}</h4>
                    <p id="formato-desc">{pizza.desc}</p>
                    <h5>Ingredientes: </h5>
                    <ul style={{ listStyle: 'none' }}>
                        {pizza.ingredients.map(ingrediente => (
                            <li key={ingrediente}>🍕{ingrediente}</li>
                        ))}
                    </ul>
                    <section className="estilo-footer">
                        <h3>Precio: ${pizza.price}</h3>
                        <button className="boton-añadir2" onClick={() => agregarAlCarrito(pizza.id)}>Añadir 🛒</button>
                    </section>
                </section>
            </div>
        </div>
    );
}

