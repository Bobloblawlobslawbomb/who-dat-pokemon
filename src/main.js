import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Pokemon from './who-dat-pokemon.js';


$(document).ready(function() {
  console.log("Reached ready");
  $('#I-choose-you').click(function() {
    console.log("click happened");
    let pocketMonsterName = $('#pocket-monster-name').val();
    let response= getPokemon(pocketMonsterName);
    $("#pokemon-image").append(response.sprites.versions.generation-iii.firered-leafgreen.front_default);
  });
});