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
// to render the above array ie we want to print the above data but=y only callingone ufnction
// now we are needing to call different function for different properties

function App() {
  function Pizza2() {
    return <h2>pizzas2</h2>;
  }

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
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price="18"
        photoName="pizzas/prosciutto.jpg"
      />
      <h2 className ="menu">another way</h2>

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      /> */}
      {/* instead of callint hem like this one by one we want to call dynamucally */}

      {/* ONE WAY */}
      {/* <div>
        {pizzaData.map         //this function will map the array of above 
        ((any) =>              //any is the name of the mapped array
        (<Pizza               //we call the pizza function below and pass props value using the mapped array
          name={any.name}
          ingredients={any.ingredients}
          price={any.price}
          photoName={any.photoName}
           />  
        ))}
      </div> */}
      {/* ANOTHER WAY */}

      <div className="pizzas">
        {pizzaData.map((any2) => (<Pizza pizzaObj={any2} key={any2.name}></Pizza>))}
        {/* key is a unique property of the mapped array */}
      </div>

      <h2 className="menu">another way</h2>

      <div className="pizzas">
        {pizzaData.map((any3) => (
          <div className="pizza">
            <img src={any3.photoName} alt={any3.photoName} />
            <div>
              <h3>{any3.name}</h3>
              <p>{any3.ingredients}</p>
              <span>price = {any3.price}</span>
              <p>{any3.soldOut}</p>
            </div>
          </div>
        ))}
        {/* any3 can only be used inside bracks here not outside to use
            mapped array outside use pizzaObj and destruct it */}

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

//STYLING
function Header() {
  const styling = {};
  return (
    <header className="header">
      <h1 style={styling}>Fast React Pizza Co.</h1>
    </header>
  );
}

// DATE
function Footer() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  let b;
  if (isOpen) {
    b = "we are open";
  } else b = "closed";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{b}
      <div>
        hours={hour} min = {min}
      </div>
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
