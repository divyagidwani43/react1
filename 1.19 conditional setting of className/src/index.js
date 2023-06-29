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
  const pizzas = pizzaData;
  // const pizzas=[]
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>
      {numPizza > 0 ? (
        <>
          <p>Authentic italian crusine. 6 dishes to choose from. All from
            our stone oven, all organic, all deliciour.
          </p>
          <ul className="pizzas">
            {pizzaData.map((any2) => (
              <Pizza pizzaObj={any2} key={any2.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>working</p>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {
  // here we destruct props to pizzaObj and use its value pizzaObj is mapped array of pizzaData copied from any2 map
 
  return (
    <div className={"pizza" + (pizzaObj.soldOut ? " sold-out" : "")}>
    {/* // same as */}
    {/* //  <div className= {`pizza ${pizzaObj.soldOut ? " sold-out" : ""}`}> */}
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      {/* pizzaObj from abbve updated */}
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>price = {pizzaObj.soldOut ?  "sold out" :pizzaObj.price}</span>
        {/* the above explains if soldOut is false then print price
        otherwise print soldOut */}
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

function Order({ closeHour, any_name }) {
  // we can destruct the props i.e assign props.closeHour to closeHour by ({calling_here})
  return (
    <>
      <div className="order">
        <p>
          we're open from {any_name}:00 till {closeHour}:00.Come visit us or
          order online
        </p>
        <button className="btn">order now</button>
      </div>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order any_name={openHour} closeHour={closeHour} />
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
