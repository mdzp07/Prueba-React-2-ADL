import { useContext, useState } from "react";
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";
import '../css/Menu.css'

export default function Menu() {
    const { pizzas } = useContext(MyContext);
    const { setCarrito } = useContext(MyContext);
    const navigate = useNavigate();

    const irAPizza = (pizzaId) => {
        navigate(`/${pizzaId}`);
    }

    const agregarAlCarrito = (pizza) => {
        setCarrito((addCarrito) => [...addCarrito, pizza]);
    };

    return (
        <div className="render-pizzas">
            {pizzas.map((pizza) => (
                <div className="card-pizza" key={pizza.id}>
                    <img src={pizza.img} alt="" />
                    <h4 id="pizza-name">{pizza.name}</h4>
                    <section id="ingredients">
                        <h6>Ingredientes: </h6>
                        <ul style={{ listStyle: 'none' }}>
                            {pizza.ingredients.map((ingrediente) => (
                                <li key={ingrediente}>🍕{ingrediente}</li>
                            ))}
                        </ul>
                    </section>
                    <h2 id="precio">${pizza.price}</h2>
                    <div className="Botones">
                        <button className="boton-ver-mas" onClick={() => irAPizza(pizza.id)}>Ver más 👀</button>
                        <button className="boton-añadir" onClick={() => agregarAlCarrito(pizza.id)}>Añadir 🛒</button>
                    </div>
                </div>
            ))}
        </div>
    );
}