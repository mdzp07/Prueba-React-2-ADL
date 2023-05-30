import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from "./components/Navbar";
import MyContext from "./MyContext";
import pizzasData from './pizzas.json';

// vistas 

import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito"

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  console.log(pizzas);

  const globalState = { pizzas, setPizzas, carrito, setCarrito };

  return (
    <>
      <MyContext.Provider value={globalState}>
        <BrowserRouter>
          <Encabezado />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App;