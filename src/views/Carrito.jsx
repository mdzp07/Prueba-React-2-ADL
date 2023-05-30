import { useContext } from "react";
import MyContext from "../MyContext";


export default function Carrito() {
  
  const { carrito, pizzas } = useContext(MyContext);

  const pizzasAgregadas = pizzas.filter((pizza) => carrito.includes(pizza.id));


  return (
    <>
      <div>
        {pizzasAgregadas.map((pizza) => (
              <div key={pizza.id}>
              <img src={pizza.img} alt="" />
              <h3>{pizza.name}</h3>
              <h3>{pizza.price}</h3>
            </div>
        ))}
        
      </div>
    </>

  );

}
