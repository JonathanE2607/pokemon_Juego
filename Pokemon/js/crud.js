const pokeMuestra = document.querySelector('#pokeMuestra');
const agregarPoke = document.querySelector('#aggPoke');
const mostrar = document.querySelector('#Ver');
const idPoke = document.querySelectorAll('#idPoke');
const idAgg = document.querySelector('#idAgg');
const todos = document.querySelector('#pokeCrud');
function obtenerPokemon(){
    let nombrePoke = document.getElementById("pokeInp").value.trim().toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePoke}`;

    fetch(url)
   .then((Response) => Response.json())
   .then(data => mostrarPokemon(data))
};

/*Mostrar Info Pokemon */

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
          
          <h2 class="card-text text-center id" id="idPokeCrud">#${poke.id}</h2>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item d-flex justify-content-around">
         ${tipos}
          </li>
          <li class="d-flex justify-content-around">
            <p class="stat mt-3">${poke.height} m</p>
            <p class="stat mt-3">${poke.weight} Kg</p>
          </li>
        </ul>`;
   div.innerHTML = carta;
  pokeMuestra.append(div);
  todos.appendChild(div);
};

$(function(){
   $('#idAgg').click(function(){
    $('#listaPokemon').load('#pokedex.html')
   }) 
})


/*function aggPoke(poke) {
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
    <img src="" class="card-img-top" alt="Pokemon">
        <div class="card-body">
          
          <h2 class="card-text text-center id" id="idPokeCrud">#${poke.id}</h2>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item d-flex justify-content-around">
         <p class="bg-warning" style="width: 95px; border-radius: 0.50rem; text-align: center;"">ELECTRIC</p>
              <p class="bg-danger text-white" style="width: 95px; border-radius: 0.50rem; text-align: center;">FIGHTING</p>
          </li>
          <li class="d-flex justify-content-around">
            <p class="stat mt-3">${poke.height} m</p>
            <p class="stat mt-3">${poke.weight} Kg</p>
          </li>
        </ul>`;
   div.innerHTML = carta;
   todos.append(div);
}*/
$(idagg).hide();
idAgg.addEventListener('click', aggPoke);

