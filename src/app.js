import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// Listas de palabras
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'best', 'smart'];
let noun = ['developer', 'coder', 'delicious', 'genius', 'previous'];
let extensions = ['.com', '.net', '.us', '.io', '.org', '.dev'];

  let dominiosNormales = [];
  let dominiosHack = [];

pronoun.forEach(pron => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      let nombreDeDominios = pron+ adj+ noun ;
        extensions.forEach(ext => {          
          if(noun.endsWith(ext.slice(1))){
            // console.log(pron+ adj+noun.slice(0,-ext.slice(1).length)+ ext)
            dominiosHack.push(pron + adj + noun.slice(0, - ext.slice(1).length) + ext);
          } else{
            dominiosNormales.push(nombreDeDominios + ext);
            // console.log(nombreDeDominiosConExt)
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