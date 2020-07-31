//import pokemon from "./data/pokemon/pokemon.js";

// Función para filtrar la data por nombre y número (searchPoke: valor del imput)
export const  searchPokemon = (pokemonData, searchPoke) => {
  return pokemonData.filter(pokemon => {
    if(isNaN(searchPoke)) {
      return pokemon.name.toLowerCase().includes(searchPoke.toLowerCase())
    } else {
        return pokemon.num.includes(searchPoke)
      }
  })
}

 // Función sort para ordenar la data ascendente y descendente numéricamente
const orderAsc = (a,b) => {
  return a.num - b.num
};
const orderDesc = (a,b) => {
  return b.num - a.num
};
export const orderPokeData = (pokemonData, datavalue) => {   
  if(datavalue === "ascend"){
    return pokemonData.sort(orderAsc);
  }
  if(datavalue === "descend"){
    return pokemonData.sort(orderDesc);
  }
};

// Función filtrar Data por tipo
export const filterPokeTypes = (pokemonData, typeValue) => {
  let arrayPokemonType = []
  for (let i=0; i < pokemonData.length; i++) {
    for (let j=0; j < pokemonData[i].type.length; j++) {
      if( pokemonData[i].type[j] === typeValue) {
        arrayPokemonType.push(pokemonData[i]);
      }
    }
  };
  return arrayPokemonType;
}; 

//Funcion filtrar Data por debilidad
export const filterPokeWeakness = (pokemonData, weakValue) => {
  let arrayPokemonWeak = []
  for (let i=0; i < pokemonData.length; i++) {
    for (let j=0; j < pokemonData[i].weaknesses.length; j++) {
      if( pokemonData[i].weaknesses[j] === weakValue) {
        arrayPokemonWeak.push(pokemonData[i]);
      }
    }
  };
  return arrayPokemonWeak;
}



/*export const filterPokeTypes = (pokemonData, typeValue) => {
  console.log(pokemonData);
  return pokemonData.filter(pokemon => pokemon.type === typeValue);
}*/





//export default function searchPokemon(searchPoke) {  
//      let searchPokeName;
//      let searchPokeId;
//      if (isNaN(inputSearch.value)) { 
//         searchPokeName = searchPoke.find(pokemon => 
//         pokemon.name.toLowerCase() === inputSearch.value.toLowerCase());       
//         return searchPokeName;
//        }
//        else{
//              searchPokeId = searchPoke.find(pokemon => pokemon.id === parseInt(inputSearch.value));         
//              return searchPokeId;
//         } 
//     }


     
  

        
 




