//https://restcountries.eu/rest/v2/name/${country}
//https://restcountries.eu/rest/v2/alpha/${neighbour}

let container = document.querySelector('.container');
let btn = document.querySelector('.btn-country');

let data = fetch(
  `https://pokeapi.co/api/v2/pokemon/${Math.trunc(Math.random() * 100) + 1}`
)
  .then((response) => {
    if (!response.ok)
      throw new Error('pokemon is not defined', response.status);
    return response.json();
  })
  .then((data) => {
    let html = `
    <article class="country">
        <img class="country__img" src="${data.sprites['front_default']}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <p class="country__row"><span>Weight:</span>${data.weight}</p>
            <p class="country__row"><span>Height:</span>${data.height}</p>
            <h3>Abilities:</h3>
            ${data.abilities
              .map((a, i) => {
                return `
                    <p class="country__row">
                        <span>${i + 1}</span>${a.ability.name}
                    </p>
                `;
              })
              .join('')}
        </div>
    </article>`;

    container.insertAdjacentHTML('beforeEnd', html);

    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`);
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let html = `
    <article class="country">
        <div class="country__data">
            <h3 class="country__name">Extra Details</h3>
            <p class="country__row"><span>Weight:</span>${data.base_happiness}</p>
            <p class="country__row"><span>Height:</span>${data.capture_rate}</p>
            <p class="country__row"><span>Height:</span>${data.color.name}</p>
            
        </div>
        </article>`;
    container.insertAdjacentHTML('beforeEnd', html);
  });
