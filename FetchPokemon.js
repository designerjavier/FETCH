async function NombrePokemon(pokemonName) {
    try {
      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await resultado.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error);
      throw error;
    }
  }
  
  
  (async () => {
    try {
      const pokemonName = 'pikachu'; 
      const pokemonDetails = await NombrePokemon(pokemonName);
      console.log('Detalles del Pokémon:', pokemonDetails);
    } catch (error) {
      console.error('Error:', error);
    }
  })();