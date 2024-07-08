/*variables*/
const cartaFrenteUno = document.querySelector('#cartaFrenteUno');
const cartaFrenteDos = document.querySelector('#cartaFrenteDos');
var addBtn = document.querySelector('#addBtn');
var alertNo = document.querySelector('#alertNo');
var cards = document.querySelectorAll('.card');
var contador = document.querySelector('#contador');
const barajar = document.querySelector('#barajar');
const cartaDosAtras = document.querySelector('#cartaDosAtras');
document.addEventListener('DOMContentLoaded', ()=>{});

/* Generador de carta uno */ 
const randomPoke1 = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};
const randomUno = randomPoke1(51, 53);

const cartaUno = async() =>{
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomUno}`)
      const data = await res.json();
      mostrarPokemon(data);
    } catch (error) {
      alert("Error");
    }
};

randomPoke1(51, 53);
cartaUno();

function mostrarPokemon(poke){
  const frente = document.createElement('div');
  frente.classList.add("card");
  const carta = `
   <img src="${poke.sprites.other["official-artwork"].front_default}" class="card_image">
              <div class="contenido">
                <h2>${poke.name}</h2>
                <hr>
                <h2 id="idPokeJuegoUno">#${poke.id}</h2>
                <hr>
                <h3>${poke.height} m</h3>
                <h3>${poke.weight} Kg</h3>
            </div>
   `;
frente.innerHTML = carta;
cartaFrenteUno.append(frente);
};

/* Generador de Carta Dos*/ 
const randomPoke2 = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};
const randomDos = randomPoke2(51, 53);

const cartaDos = async() =>{
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomDos}`)
    const data = await res.json();
    mostrarPokemonDos(data);
  } catch (error) {
    alert("Error");
  }
};

randomPoke2(51, 53);
cartaDos();

function mostrarPokemonDos(poke){
  const frente = document.createElement('div');
  frente.classList.add("card");
  const carta = `
   <img src="${poke.sprites.other["official-artwork"].front_default}" class="card_image">
              <div class="contenido">
                <h2>${poke.name}</h2>
                <hr>
                <h2 id="idPokeJuegoDos">#${poke.id}</h2>
                <hr>
                <h3>${poke.height} m</h3>
                <h3>${poke.weight} Kg</h3>
            </div>
   `;
frente.innerHTML = carta;
cartaFrenteDos.append(frente);
};

/** Animacion card */
[...cards].forEach((card)=>{
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
});

/*Logica */
const aggBtn = ()=>{
    const addBtna = document.createElement('div');
    addBtna.classList.add("Container"); 
    addBtna.classList.add("d-flex");
     addBtna.classList.add("justify-content-end");
    const Boton = `<button style="width: 260px; margin-left: 107px;" type="button" class="btn btn-dark ml-3" id="aggPoke">Agregar a la pokedex</button>`;
    addBtna.innerHTML = Boton;
    addBtn.append(addBtna); 
};

function alertPoke(){
  const addAlert = document.createElement('div');
  addAlert.classList.add("alert");
  addAlert.classList.add("alert-success");
  addAlert.innerHTML = `Usted a encontrado un pokemon`;
  alertNo.append(addAlert);
};

function alertPokeNo(){
  const addAlert = document.createElement('div');
  addAlert.classList.add("alert");
  addAlert.classList.add("alert-danger");
  addAlert.innerHTML = `Intente Nuevamente`;
  alertNo.append(addAlert);
};


var valor = 0;
function contar(){
  valor++;
  contador.innerHTML = valor;
}

const hola = () =>{
  if (randomUno == randomDos) {
 alertPoke();
 contar();
  } else {
    alertPokeNo();
  }
};



/*Boton que genera las acciones */
barajar.addEventListener('click', _ => {
location.reload();
barajar.addEventListener('click', cartaUno);
barajar.addEventListener('click', cartaDos);
barajar.addEventListener('click', mostrarPokemon);
})

cartaDosAtras.addEventListener('click', hola);

/*function alert(){
  const addAlert = document.createElement('div');
  addAlert.classList.add("alert");
  addAlert.classList.add("alert-dark");
  const alertN = `Usted a encontrado un poemon`;
  alertNo.innerHTML = alertN;
}*/ 

/* aggBtn();
    alert('Usted a encontrado un pokemon');
    window.setTimeout(function(){
      $("alert").fadeTo(1500, 0).slideDown(1000, function(){
        $(this).remove();
      })
    }, 3000);*/ 