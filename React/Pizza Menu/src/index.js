import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza i={0} />
      <Pizza i={1} />
      <Pizza i={2} />
      <Pizza i={3} />
      <Pizza i={4} />
    </div>
  );
}
function Footer() {
  return <h3>{new Date().toLocaleTimeString()} .We are currently Open</h3>;
}

function Pizza(props) {
  const pizza = pizzaData[props.i];
  const pizzaName = pizza.name.split(" ")[1];
  return (
    <div>
      <h3>{pizzaName}</h3>
      <p>{pizza.ingredients}</p>
      <img src={`pizzas/${pizzaName.toLowerCase()}.jpg`} alt="Pizza name" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// React v  18 use this type of syntax
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
