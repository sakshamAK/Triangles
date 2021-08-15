import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import Intro from './Components/Intro.js';
import Triangle from './Components/Triangle.js';
import ThreeTriangles from './Components/ThreeTriangles.js';
import Sides from './Components/SidesBased.js';
import Hypotenous from './Components/Hypotenous';
import Quiz from "./Components/Quiz";
import "./index.css";
import "./page2.css";
import "./page3.css"
import "./page4.css"
import "./page5.css"
import "./quiz.css"
function HelloWorld() {
  return (

    <>
      <Header />
      <Intro />
      <Triangle />
      <ThreeTriangles />
      <Sides />
      <Hypotenous />
      <Quiz />
    </>

  )
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));

