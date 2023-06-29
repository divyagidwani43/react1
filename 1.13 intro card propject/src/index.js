import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
  return<img className = "avatar" src = "margherita.jpg" alt ="margherita"/>

}
function Intro(){
  return <div>
    <h1>jonas</h1>
    {"full stack developer and teacher"}
  </div>
}
function SkillList(){
  return <div className ="skill-list">
    <Skill skill = "react"/>
    <Skill skill = "web-dev"/>
    <Skill skill = "html"/>
    <Skill skill = "css"/>
    
  </div>
}
function Skill(props){
  return <div className = "skill">
    <span>{props.skill}</span>
  </div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
