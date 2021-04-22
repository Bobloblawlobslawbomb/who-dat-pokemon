import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './js/who-dat-pokemon.js';


function showPokemon(response) {
  if (response) {
    const spriteProperty = response.sprites.front_default;
    $("#pokedex-number").text(response.id);
    $("#name").text(response.name);
    $("#height").text((response.height * .1) + " meters");
    $("#weight").text(response.weight + " what units?");
    $("#pokemon-image").html(`<img src="${spriteProperty}">`);
  }
}

async function parsePokemon(pocketMonsterName) {
  const response = await PokemonService.getPokemon(pocketMonsterName);
  showPokemon(response);
}

$(document).ready(function () {
  $('#I-choose-you').submit(function (event) {
    event.preventDefault();
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