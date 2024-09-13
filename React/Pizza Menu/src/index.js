import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header class="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main class="menu">
      <h2>Our Menu</h2>
      {/* What this will do is it act like the div but it ensure that it can be invisible just like <></> this */}
      <React.Fragment>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        {numPizza > 0 ? (
          <ul class="pizzas">
            {pizzas.map((_, i) => (
              <Pizza pizza={pizzaData[i]} />
            ))}
          </ul>
        ) : (
          <p>We are still working on our menu</p>
        )}
      </React.Fragment>
    </main>
  );
}
function Pizza({ pizza }) {
  return (
    <div class={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt="Pizza name" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price + 3}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hourNow = new Date().getHours();
  const [open, close] = [12, 22];
  const isOpen = hourNow >= open && hourNow <= close;

  return (
    <footer class="footer">
      {isOpen ? <Open closeHour={close} /> : <p>We are closed Now</p>}
    </footer>
  );
}

function Open({ closeHour }) {
  return (
    <p className="order">
      `We are open until {closeHour}:00 please visit the store or order online`
      <button className="btn">Order</button>
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// React v  18 use this type of syntax
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
