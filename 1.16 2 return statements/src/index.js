import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  }
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu />
      <Footer></Footer>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <div className="pizzas">
        {pizzaData.map((any2) => (
          <Pizza pizzaObj={any2} key={any2.name}></Pizza>
        ))}
        {/* key is a unique property of the mapped array */}
      </div>
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
      {/* pizzaObj from abbve updated */}
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>price = {props.pizzaObj.price}</span>
        <p>{props.pizzaObj.soldOut}</p>
      </div>
    </div>
  );
}

function Header() {
  const styling = {};
  return (
    <header className="header">
      <h1 style={styling}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // we can return 2 returns function if we use if else statement

  if (isOpen) {
    return (
      <footer className="footer">
        <div className="order">
          <p>sorry! we're closed.</p>
          <p>we're open between {openHour}:00 to {closeHour}:00</p>
        </div>
      </footer>
    );
  }
  // if the above if statement is true above value of return will be sent if not the below return
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we're open till {closeHour}:00.Come visit us or order online</p>
          <button className="btn">order now</button>
        </div>
      ) : (
        <p>close</p>
      )}
    </footer>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
