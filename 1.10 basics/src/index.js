import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // make sure function name starts from caps
  function Pizza2 (){
    return <h2>pizzas2</h2>
  }
  // can also be done but is not advices ,Pizza2 can be called in returnof app to render it to screen

  return (
    <div>
      {/* the return function only returns one component and below are 2 component function listed
      to return more than 1 function wrap the funtion in<div> or any other <> */}
      <Header></Header>
      <Pizza></Pizza>
      {/* will render whatever Pizza function returns */}
      <Pizza2></Pizza2>
    </div>
  );
}

// we divide this app into components of header menu and footer


function Header (){
  return <div>
    <h1>Fast React Pizza Co.</h1>
  </div>
}


function Pizza (){
  return <div>
    <h2>pizzas</h2>
    <img src ='pizzas/prosciutto.jpg' alt="prosciutto"/>
    {/* to add image */}
    <p>"Pizza Prosciutto" </p>
    <p>"Tomato, mozarella, ham, aragula, and burrata cheese"</p>
  </div>
}
// will print nothing on screen as the funciton rendered on screeen is app not pizza to render on screen call this function in app fucntion
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
