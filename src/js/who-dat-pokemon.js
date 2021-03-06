export default class PokemonService {
  static getPokemon(pocketMonsterName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pocketMonsterName}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}

// export default class WeatherService {  
//   static async getWeather(city) {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }




// Let's get Gyarados' sprite!
// We can get our "response" JSON object, then access it with the *value* nested in the *sprite* property:
// response.sprites.versions.generation-iii.firered-leafgreen.front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/130.png"

// ...or, we can look at that value itself (the web address) and look for a pattern:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/130.png
// Gyarados is #130, so we could do a separate call for an image based on that (which is what Erik was doing in Postman)