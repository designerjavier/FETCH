async function listaPokemon() {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const dato = await respuesta.json();
      return dato.results;
    } catch (error) {
      console.error('Error al obtener la lista de Pokémon:', error);
      throw error;
    }
  }
  
  
  (async () => {
    try {
      const pokemonList = await listaPokemon();
      console.log('Lista de los primeros 50 Pokémon:', pokemonList);
    } catch (error) {
      console.error('Error:', error);
    }
  })();