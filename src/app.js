import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'best', 'smart'];
let noun = ['developer', 'coder', 'delicious', 'genius', 'previous'];
let extensions = ['.com', '.net', '.us', '.io', '.org', '.dev'];

let dominiosNormales = [];
let dominiosHack = [];

pronoun.forEach(pron => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      let nombreDeDominio = pron + adj + noun;
      extensions.forEach(ext => {
        if (noun.endsWith(ext.slice(1))) {
          let nounHack = noun.slice(0, - ext.slice(1).length);
          let dominioHack = pron + adj + nounHack;
          dominiosHack.push(dominioHack + ext);
        } else {
          dominiosNormales.push(nombreDeDominio + ext);
        }
      })
    })
  })
});

let tbodyNormales = document.getElementById('dominiosNormales');
dominiosNormales.forEach((dominio, index) => {
  let row = `<tr>
    <td>${index + 1}</td>
    <td>${dominio}</td>
  </tr>`;
  tbodyNormales.innerHTML += row;
});

let tbodyHack = document.getElementById('dominiosHack');
dominiosHack.forEach((dominio, index) => {
  let row = `<tr>
    <td>${index + 1}</td>
    <td>${dominio}</td>
  </tr>`;
  tbodyHack.innerHTML += row;
});