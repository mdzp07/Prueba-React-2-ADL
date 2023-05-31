import React, { useContext } from "react";
import MyContext from "../MyContext";
import '../css/Carrito.css'

export default function Carrito() {
  const { carrito, pizzas, cantidad, setCantidad, setCarrito } = useContext(MyContext);

  const pizzasAgregadas = pizzas.filter((pizza) => carrito.includes(pizza.id));

  const incrementarCantidad = (pizzaId) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [pizzaId]: (prevCantidad[pizzaId] || 0) + 1,
    }));
  };

  const decrementarCantidad = (pizzaId) => {
    if (cantidad[pizzaId] > 0) {
      setCantidad((prevCantidad) => ({
        ...prevCantidad,
        [pizzaId]: prevCantidad[pizzaId] - 1,
      }));
      if (cantidad[pizzaId] === 1) {
        setCarrito((prevCarrito) => prevCarrito.filter((id) => id !== pizzaId));
      }
    }
  };

  return (
    <>
      <div style={{ marginTop: 80, marginBottom: 80 }}>
        {pizzasAgregadas.map((pizza) => (
          <div key={pizza.id} className="card-cart">
            <div className="section-1-card">
              <img src={pizza.img} alt="" />
              <h5>{pizza.name}</h5>
            </div>
            <div className="section-2-card">
              <h5>${pizza.price}</h5>
              <button className="boton-restar" onClick={() => decrementarCantidad(pizza.id)}> - </button>
              {cantidad[pizza.id] > 0 && <h5>{cantidad[pizza.id]}</h5>}
              <button className="boton-sumar" onClick={() => incrementarCantidad(pizza.id)}> + </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}