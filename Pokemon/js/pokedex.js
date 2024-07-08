const listaPokemon = document.querySelector("#listaPokemon");
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++){
   fetch(url + i)
   .then((Response) => Response.json())
   .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){

  let tipos = poke.types.map(type => 
    `<p class="bg-dark text-white" style="width: 95px; border-radius: 0.50rem; text-align: center;"">${type.type.name}</p>`
  );
  tipos = tipos.join('')




      const div = document.createElement("div");
      div.classList.add("card");
      div.classList.add("pokemon");
      div.classList.add("col-xl-4");
      div.classList.add("col-md-6");
      div.classList.add("col-sm-12");
      div.classList.add("mt-3");
      const carta = `
      <div class="card-header">
    <h2>${poke.name}</h2>
  </div>
      <img src="${poke.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="Pokemon">
          <div class="card-body">
            
            <h2 class="card-text text-center id" id="idPoke">#${poke.id}</h2>
          <ul class="list-group list-group-flush ">
            <li class="list-group-item d-flex justify-content-around">
           ${tipos}
            </li>
            <li class="d-flex justify-content-around">
              <p class="stat mt-3">${poke.height}</p>
              <p class="stat mt-3">${poke.weight}</p>
            </li>
          </ul>`;
     div.innerHTML = carta; 
          listaPokemon.append(div); 
          
    
};


