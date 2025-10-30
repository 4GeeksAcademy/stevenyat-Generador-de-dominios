// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

// let pronoun = ['the', 'our', 'my'];
// let adj = ['great', 'big', 'best', 'smart'];
// let noun = ['jogger', 'racoon', 'developer', 'coder'];
// let extensions = ['.com', '.net', '.us', '.io', '.org', '.dev'];


// pronombres.forEach(prom => {
//   adjetivos.forEach(adj => {
//     sustantivos.forEach(sus => {
      
//       console.log(prom, adj, sus)
//     })
//   })
// });

// Listas de palabras
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'best', 'smart'];
let noun = ['developer', 'coder', 'delicious', 'genius', 'previous'];
let extensions = ['.com', '.net', '.us', '.io', '.org', '.dev'];

pronoun.forEach(pron => {
  adj.forEach(adj => {
    noun.forEach(noun => {
      let nombreDeDominios = pron+ adj+ noun ;
        extensions.forEach(ext => {          
          if(noun.endsWith(ext.slice(1))){
            console.log(pron+ adj+noun.slice(0,-ext.slice(1).length)+ ext)
          } else{
            let nombreDeDominiosConExt = nombreDeDominios + ext;
          console.log(nombreDeDominiosConExt)
          }
          

        })
    })
  })
});