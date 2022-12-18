import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {gsap} from 'gsap'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e)=>{
  gsap.to(cursor, {
    css:{
      left: e.clientX - 10 +"px",
      top: e.clientY - 10 +"px"
    }
  })
})

window.addEventListener("mousedown", ()=>{
  cursor.style.scale = 0.6
})
window.addEventListener("mouseup", ()=>{
  cursor.style.scale = 1
})

window.addEventListener("click", ()=>{
  gsap.to(cursor, {
    duration: 0.3,
    css:{
      scale: 0.6
    }
  })
  setTimeout(()=>{
    gsap.to(cursor, {
      duration: 0.3,
      css:{
        scale: 1
      }
    })
  }, 500)
})