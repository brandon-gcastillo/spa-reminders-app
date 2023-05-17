export async function getPokemon(pokemonName) {
    const URI = "https://pokeapi.co/api/v2";
    const endpoints = {
        searchPokemon: "pokemon"
    }

    try {
        //let pokemonDetails;
        const response = await fetch(`${URI}/${endpoints.searchPokemon}/${pokemonName}`, { method: "GET" });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}