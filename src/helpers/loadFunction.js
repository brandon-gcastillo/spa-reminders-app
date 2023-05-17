import { getPokemon } from "./getPokemon.js";

export async function loadFunction(e) {
    //e.preventDefault();
    let charmander = await getPokemon("charmander");
    console.log(charmander);
    // console.log("page not reloading");
}