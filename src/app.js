/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
//   document.querySelector("#btn").addEventListener("click", () => {
//     document.querySelector("#domain").innerHTML = generateDomain();
//   });
// };

// let generateDomain = () => {
//   let pronoun = ["our", "the", "a"];
//   let noun = ["jogger", "racoon", "driver", "dog", "comedian", "pinecone"];
//   let adj = ["great", "big", "passionate", "angry", "super", "tiny"];
//   let extensions = ["com", "net", "us", "io"];

//   let proIndx = Math.floor(Math.random() * pronoun.length);
//   let nounIndx = Math.floor(Math.random() * noun.length);
//   let adjIndx = Math.floor(Math.random() * adj.length);
//   let extIndx = Math.floor(Math.random() * extensions.length);

//   return (
//     pronoun[proIndx] + adj[adjIndx] + noun[nounIndx] + "." + extensions[extIndx]
//   );
// };

const listDomain = () => {
  let pronoun = ["The", "our"];
  let adj = ["big", "great"];
  let noun = ["jogger", "racoon"];
  let extension = ["com", "net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + "." + extension[l]);
        }
      }
    }
  }
};

listDomain();
