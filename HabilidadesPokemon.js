async function getPokemonDetailsByName(PokemonNombre) {
    try {
      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonNombre}`);
      const data = await resultado.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error);
      throw error;
    }
  }
  
  async function getPokemonAbilities(PokemonNombre) {
    try {
      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonNombre}`);
      const data = await resultado.json();
      return data.abilities.map(ability => ability.ability.name);
    } catch (error) {
      console.error('Error al obtener las habilidades del Pokémon:', error);
      throw error;
    }
  }
  
  async function TipoPokemon(typeName) {
    try {
      const resultado = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
      const data = await resultado.json();
      return data;
    } catch (error) {
      console.error('Error al obtener información sobre el tipo de Pokémon:', error);
      throw error;
    }
  }
  
 
  (async () => {
    try {
     
      const PokemonNombre = 'raticate';
      const PokemonDetalles = await getPokemonDetailsByName(PokemonNombre);
      console.log('Detalles del Pokémon:', PokemonDetalles);
  
      // Obtener habilidades de un Pokémon específico
      const PokemonHabilidades = await getPokemonAbilities(PokemonNombre);
      console.log('Habilidades del Pokémon:', PokemonHabilidades);
  
    
      const typeName = 'water';
      const typeInfo = await TipoPokemon(typeName);
      console.log('Información sobre el tipo de Pokémon:', typeInfo);
    } catch (error) {
      console.error('Error:', error);
    }
  })();