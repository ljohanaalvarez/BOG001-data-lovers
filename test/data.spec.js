
import data from '../src/data/pokemon/pokemon.js';
import {searchPokemon, orderPokeData, filterPokeTypes, filterPokeWeakness} from '../src/data.js';

  
  describe('dataFunctions.searchPokemon', () => {
    it('deberia ser una función', () => {
      expect(typeof searchPokemon).toBe('function');
    });

    it('debería retornar pikachu para 025', () => {
      expect(searchPokemon(data.pokemon,"025")[0]).toEqual( {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
        "type": [
          "Electric"
        ],
        "height": "0.41 m",
        "weight": "6.0 kg",
        "candy": "Pikachu Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 0.21,
        "avg_spawns": 21,
        "spawn_time": "04:00",
        "multipliers": [2.34],
        "weaknesses": [
          "Ground"
        ],
        "next_evolution": [{
          "num": "026",
          "name": "Raichu"
        }]
      });
    });
    it('debería retornar Kabuto para Kabuto', () => {
      expect(searchPokemon(data.pokemon,"Kabuto")[0]).toEqual( {
        "id": 140,
        "num": "140",
        "name": "Kabuto",
        "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "0.51 m",
        "weight": "11.5 kg",
        "candy": "Kabuto Candy",
        "candy_count": 50,
        "egg": "10 km",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "00:05",
        "multipliers": [
          1.97,
          2.37
        ],
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ],
        "next_evolution": [{
          "num": "141",
          "name": "Kabutops"
        }]
      })
    });
  });

  describe('orderPokeData', () => {
    it('is a function', () => {
      expect(typeof orderPokeData).toBe('function');
    });
  
    it('si se ordena descendente debería retornar Mew en primera posición', () => {
      expect(orderPokeData(data.pokemon, "descend")[0]).toEqual({
        "id": 151,
        "num": "151",
        "name": "Mew",
        "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
        "type": [
          "Psychic"
        ],
        "height": "0.41 m",
        "weight": "4.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "multipliers": null,
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      });
    });
    it('si se ordena ascendente debería retornar charmander en cuarta posición', () => {
      expect(orderPokeData(data.pokemon, "ascend")[3]).toEqual({
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
          "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ],
        "next_evolution": [{
          "num": "005",
          "name": "Charmeleon"
        }, {
          "num": "006",
          "name": "Charizard"
        }]
      });
    });
  });


  describe('dataFunctions.searchPokemon', () => {
    it('deberia ser una función', () => {
      expect(typeof searchPokemon).toBe('function');
    });

    it('debería retornar pikachu para 025', () => {
      expect(searchPokemon(data.pokemon,"025")[0]).toEqual( {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
        "type": [
          "Electric"
        ],
        "height": "0.41 m",
        "weight": "6.0 kg",
        "candy": "Pikachu Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 0.21,
        "avg_spawns": 21,
        "spawn_time": "04:00",
        "multipliers": [2.34],
        "weaknesses": [
          "Ground"
        ],
        "next_evolution": [{
          "num": "026",
          "name": "Raichu"
        }]
      });
    });
    it('debería retornar Kabuto para Kabuto', () => {
      expect(searchPokemon(data.pokemon,"Kabuto")[0]).toEqual( {
        "id": 140,
        "num": "140",
        "name": "Kabuto",
        "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "0.51 m",
        "weight": "11.5 kg",
        "candy": "Kabuto Candy",
        "candy_count": 50,
        "egg": "10 km",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "00:05",
        "multipliers": [
          1.97,
          2.37
        ],
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ],
        "next_evolution": [{
          "num": "141",
          "name": "Kabutops"
        }]
      })
    });
  });

  describe('filterPokeTypes', () => {
    it('is a function', () => {
      expect(typeof filterPokeTypes).toBe('function');
    });
  
    it('si se busca  pokémon tipo Electric debería retornar un objeto', () => {
      expect(typeof filterPokeTypes(data.pokemon, "Electric")).toBe( 'object');
    });
    it('si se busca pokémon tipo Dragon debería incluir a Dratini en posición [0]', () => {
      expect(filterPokeTypes(data.pokemon, "Dragon")[0]).toEqual( {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "multipliers": [
          1.83,
          1.84
        ],
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ],
        "next_evolution": [{
          "num": "148",
          "name": "Dragonair"
        }, {
          "num": "149",
          "name": "Dragonite"
        }]
      });
    });
  });


  describe('filterPokeWeakness', () => {
    it('is a function', () => {
      expect(typeof filterPokeWeakness).toBe('function');
    });
  
    it('si se filtra por debilidad de pokémon tipo Steel debería retornar un objeto', () => {
      expect(typeof filterPokeWeakness(data.pokemon, "Steel")).toBe( 'object');
    });
    it('si se filtra por debilidad de pokémon tipo Fairy debería retornar un arreglo de 11 elementos', () => {
      expect(filterPokeWeakness(data.pokemon,"Fairy")).toHaveLength(11);
    });
  });



  // npx opener ./coverage/lcov-report/index.html (comando para verificar coverage(lineas testeadas))
  // typeof se utiliza cuando se requiere conocer la naturaleza de lo que se obtiene y va con toBe
  // it.skip se utiliza para omitir ese test
  // toEqual se utiliza cuando queremos decir que lo que obtiene sea exacto a y va sin typeof
  // toHaveLength se utiliza para indicar el largo o cantidad de elementos que debe contener el arreglo.



  
  