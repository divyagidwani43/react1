import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css"; //adding css file to use its styling and className
//on adding we see changes in app like boder yellow and page background
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
  // make sure function name starts from caps
  function Pizza2() {
    return <h2>pizzas2</h2>;
  }
  // can also be done but is not advices ,Pizza2 can be called in returnof app to render it to screen

  return (
    <div className="container">
      {" "}
      {/* will add syling of container variable from css file */}
      {/* the return function only returns one component and below are 2 component function listed
      to return more than 1 function wrap the funtion in<div> or any other <> */}
      <Header></Header>
      {/* <Pizza></Pizza> */}
      {/* will render whatever Pizza function returns */}
      {/* <Pizza2></Pizza2> */}
      {/* removed pizza component as we called it in menu already so thing would repeat */}
      <Menu />
      <Footer></Footer>
    </div>
  );
}

// we divide this app into components of header menu and footer
function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      {/* the styling would be diff if it were h1 or h4 */}
      <Pizza
        // the data passed inside now can be accessed in Pizza function when we call props
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price="18"
        // if the equated value isint string it wou;d error
        photoName="pizzas/prosciutto.jpg"
        // order in which we pass date is irrelevent
      />

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        // to pass it as number not string use {} to make react aware of java s code
        // here the failed attempt will also give right answer
        photoName="pizzas/salamino.jpg"
      />

      {/* we can pass the pizza compoenet func many times and pass data through props */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  // u can see that it is a object of all values defined above in <pizza (here) />
  // now that we have the object from meny here we can call the property of these objects like of any other object
  //eg props.id_of_property
  return (
    <div>
      {/* <h3>pizza-1</h3>
      <img src="pizzas/prosciutto.jpg" alt="prosciutto" /> */}
      {/* to add image */}
      {/* <p>"Pizza Prosciutto"</p>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p> */}
      {/* <h3>pizza-2</h3>
      <img src ={pizzaData[0].photoName} alt ={pizzaData[0].name}/>
      <p>{pizzaData[0].name}</p>
      <p>{pizzaData[0].ingredients}</p> */}
      <h3>pizza-by-props</h3>
      <p>{props.name}</p>
      {/* will call the name value here, make sure its in {} otherwise it would just print props.name */}
      <p>{props.ingredients}</p>
      <p>price = {(props.price = "33")}</p>
      {/* props can be updated but not the initial value here we equate to 33 but below props.price us still the same */}
      <p>failed attempt = {props.price + 3}</p>
      {/* props will return a string as default i.e 18 and 3 then will be added as string 183 will be logged */}
      <p>update price = {Number(props.price) + 3}</p>
      {/* casting it to number to use numer property */}
      <img src={props.photoName} alt={props.photoName} />
    </div>
  );
}

//STYLING
function Header() {
  // const styling = {color:"red", fontSize :"40px", textTransform :"uppercase"}
  // commented as it would have bithered with clasaName styles
  const styling = {};
  // without {} aroung color fontsize it would eror
  return (
    <header className="header">
      <h1
        style={styling}
        // style = {{color:"red", fontSize :"40px", textTransform :"uppercase" }}
        // define above instead
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

// DATE
function Footer() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  // above is the way to get exact date time of when the app loads on screen
  const openHour = 12;
  const closeHour = 22;

  // if (hour >=openHour && hour <=closeHour) {alert("we are open")}
  // else alert ('closed')
  // it alert twice due to strict mode
  //can be done by
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  let b;
  if (isOpen) {
    b = "we are open";
  } else b = "closed";

  return (
    // <footer>{new Date().toLocaleTimeString()}. we're currently open</footer>
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{b}
      <div>
        hours={hour} min = {min}
        {/* seconds = {sec} */}
        {/* seconds will cause page to reload every sec getting annoyint */}
      </div>
    </footer>
  );
}

// will print nothing on screen as the funciton rendered on screeen is app not pizza to render on screen call this function in app fucntion
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
