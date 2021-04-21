import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './js/who-dat-pokemon.js';



function showPokemon(response) {
  if (response) {
    const spriteProperty = response["sprites"]["versions"]["generation-iii"]["firered-leafgreen"]["front_default"];
    $("#name").text(response.name);
    $("#height").text(response.weight);
    $("#weight").text(response.height);
    $("#pokemon-image").html(`<img src="${spriteProperty}">`);
  }
}

async function parsePokemon(pocketMonsterName) {
  const response = await PokemonService.getPokemon(pocketMonsterName);
  showPokemon(response);
}

$(document).ready(function () {
  console.log("Reached ready");
  $('#I-choose-you').submit(function (event) {
    event.preventDefault();
    console.log("click happened");
    let pocketMonsterName = $('#pocket-monster-name').val();
    parsePokemon(pocketMonsterName);
  });
});

// $("#pokemon-image").append(response["sprites"]["versions"]["generation-iii"]["firered-leafgreen"].front_default);
// const pokemonType = response.types // <-- it's an array of 1-2 elements
// const pokemonType1 = response.types[0].type.name
// const pokemonType2 = response.types[1].type.name
// const height = response.height // <-- in 1/10th of a meter (so "6.5 meters" will be stored as 65)
// const id = response.id // <-- this is the pokedex number (e.g. #130 for gyarados)