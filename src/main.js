import { getCharacters, getSpells, getFunFacts, getPotions, getBooks} from './data.js';
import { getCharactersCopy, getSpellsCopy, getPotionsCopy} from './data.js';
import { dataAZ, dataZA } from './data.js';

//Creamos una costante que almacena cada funcion que contiene cada uno nuestros arrays
const characters = getCharacters(); //A-Z
const charactersCopy = getCharactersCopy (); //Z-A
const spells = getSpells();
const spellsCopy = getSpellsCopy ();
const potions = getPotions();
const potionsCopy = getPotionsCopy();
const funFacts = getFunFacts();
const books = getBooks();

//Llamamos a los contenedores padre de las cards para usarlos en la funcion de botones
const charactersCardsDad = document.getElementById("characters-cards-dad");
const spellsCardsDad = document.getElementById("spells-container-dad");
const funFactsCardsDad = document.getElementById("funFacts-container-dad");
const potionsCardsDad = document.getElementById("potions-container-dad");
const booksCardsDad = document.getElementById("books-container-dad");

//Llamamos a los contenedores vacios de las cards para poderlos manipular
const charactersCards = document.getElementById("characters-cards"); // Se seleccionan elememtos del HTML y se almacenan en variables
const spellsCards = document.getElementById("spells-container");
const funFactsCards = document.getElementById("funFacts-container");
const potionsCards = document.getElementById("potions-container");
const booksCards = document.getElementById("books-container");

//Llamamos al contenedor de las graficas para poderlo ocultar en la funcion de botones
const misGraficas = document.getElementById("misGraficas");

//Se asignan las variables para el menu principal y el submenu y usarlas en ocultarOpciones
const listElements = document.querySelectorAll('.menu_item--show');
const list = document.querySelector('.menu_links');
const menu = document.querySelector('.menu_hamburger');

books.forEach((book) => {
  showBooks(book)
});

funFacts.forEach((funFact) => {
  showfunFacts(funFact)
});

function showCharacters(character){

  charactersCards.classList.add("card-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const name = document.createElement('h2');
  const nameBack = document.createElement('h2');
  const img = document.createElement('img');
  const birth = document.createElement('p');
  const gender = document.createElement('p');
  const house = document.createElement('p');
  const death = document.createElement('p');
 
  name.innerHTML = character.name;
  nameBack.innerHTML = character.name;
  img.src = character.img;
  birth.innerHTML = character.birth;
  death.innerHTML = character.death;
  gender.innerHTML = character.gender;
  house.innerHTML = character.house;

  //contenedor de HTML se le crea un elemento hijo que va a ser la const card
  charactersCards.appendChild(card);

  //dentro del elemento card se crea un elemento hijo que va a ser showcards, dentro de showcards se crean dos elementos hijos que son cardFront y cardBack
  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(name);

  cardBack.appendChild(nameBack);
  cardBack.appendChild(birth);
  cardBack.appendChild(death);
  cardBack.appendChild(gender);
  cardBack.appendChild(house);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
}

function showSpells(spell){

  spellsCards.classList.add("spell-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const nameSpell = document.createElement('h2');
  const otherNameSpell = document.createElement('h3');
  const pronunciation = document.createElement('p');
  const spellType = document.createElement('p');
  const img = document.createElement('img');

  nameSpell.innerHTML = spell.name;
  otherNameSpell.innerHTML = spell.other_name;
  pronunciation.innerHTML = spell.pronunciation;
  spellType.innerHTML = spell.spell_type;
  img.src = spell.img;

  spellsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(nameSpell);

  cardBack.appendChild(otherNameSpell);
  cardBack.appendChild(pronunciation);
  cardBack.appendChild(spellType);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
}

function showPotions(potion){

  potionsCards.classList.add("potion-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const namePot = document.createElement('h2');
  const img = document.createElement('img');
  const descriptionPot = document.createElement('p');

  namePot.innerHTML = potion.name;
  img.src = potion.img;
  descriptionPot.innerHTML = potion.description;

  potionsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(namePot);

  cardBack.appendChild(descriptionPot);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
}

function showBooks(book){

  booksCards.classList.add("book-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const titleBook = document.createElement('h2');
  const img = document.createElement('img');
  const author = document.createElement('h1');
  const releaseDay = document.createElement('h2');

  titleBook.innerHTML = book.title;
  img.src = book.img;
  author.innerHTML = book.author;
  releaseDay.innerHTML = book.releaseDay;

  booksCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);
  cardFront.appendChild(titleBook);

  cardBack.appendChild(author);
  cardBack.appendChild(releaseDay);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
}

function showfunFacts(funFact){

  funFactsCards.classList.add("funFact-container");
  const card = document.createElement('div');
  const showCards = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  const typeFF = document.createElement('h2');
  const img = document.createElement('img');
  const content = document.createElement('p');

  typeFF.innerHTML = funFact.type;
  img.src = funFact.img;
  content.innerHTML = funFact.content;

  funFactsCards.appendChild(card);

  card.appendChild(showCards);
  showCards.appendChild(cardFront);
  showCards.appendChild(cardBack);

  cardFront.appendChild(img);

  cardBack.appendChild(typeFF);
  cardBack.appendChild(content);

  card.className = "card";
  showCards.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
}

//Ocultamos todas las cards para que solo se muestren cuando el usuario de click a lo que desea ver en el menu
charactersCardsDad.style.display = 'none';
spellsCardsDad.style.display = 'none';
funFactsCardsDad.style.display = 'none';
potionsCardsDad.style.display = 'none';
booksCardsDad.style.display = 'none';
misGraficas.style.display = 'block';

//Funcion que llama a la data dependiendo de lo que el usuario quiera, la data se llama con la clase que tiene en HTML y en casi de la data ordenada se llama con innerText que es el texto que tiene el boton
function botones_personajes(){

  const personajesMenu = document.querySelectorAll(".menu_personajes");
  personajesMenu.forEach((opcion) => {
    opcion.addEventListener('click',() => {
      if(opcion.innerText === 'A - Z'){
        const ordenarCharacter = dataAZ(characters);
        charactersCards.innerHTML = "";
        ordenarCharacter.forEach((character) => {
          showCharacters(character);
          list.classList.remove('menu_links--show'); // Cuando se da click y se despliegan las cards se oculta el submenu
          charactersCardsDad.style.display = 'block';
          spellsCardsDad.style.display = 'none';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'none';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
      if(opcion.innerText === 'Z - A'){
        const ordenarCharacterZA = dataZA(charactersCopy);
        charactersCards.innerHTML = "";
        ordenarCharacterZA.forEach((characterCopy) => {
          showCharacters(characterCopy);
          list.classList.remove('menu_links--show');
          charactersCardsDad.style.display = 'block';
          spellsCardsDad.style.display = 'none';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'none';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
    });
  });

} 
botones_personajes();


function botones_hechizos() {
  const hechizosMenu = document.querySelectorAll(".menu_hechizos");
  hechizosMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if(opcion.innerText === 'A - Z'){
        const ordenarSpells = dataAZ(spells);
        spellsCards.innerHTML = "";
        ordenarSpells.forEach((spell) => {
          showSpells(spell);
          list.classList.remove('menu_links--show');
          charactersCardsDad.style.display = 'none';
          spellsCardsDad.style.display = 'block';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'none';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
      if(opcion.innerText === 'Z - A'){
        const ordenarSpellsZA = dataZA(spellsCopy);
        spellsCards.innerHTML = "";
        ordenarSpellsZA.forEach((spellCopy) => {        
          showSpells(spellCopy);
          list.classList.remove('menu_links--show');
          charactersCardsDad.style.display = 'none';
          spellsCardsDad.style.display = 'block';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'none';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
    });
  });

}
botones_hechizos();


function botones_pociones() {
  const pocionesMenu = document.querySelectorAll(".menu_pociones");
 
  pocionesMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      if(opcion.innerText === 'A - Z'){
        const ordenarPotions = dataAZ(potions);
        potionsCards.innerHTML = "";
        ordenarPotions.forEach((potion) => {
          showPotions(potion);
          list.classList.remove('menu_links--show');
          charactersCardsDad.style.display = 'none';
          spellsCardsDad.style.display = 'none';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'block';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
      if(opcion.innerText === 'Z - A'){
        const ordenarPotionsCopy = dataZA(potionsCopy);
        potionsCards.innerHTML = "";
        ordenarPotionsCopy.forEach((potionCopy) => {
          showPotions(potionCopy);
          list.classList.remove('menu_links--show');
          charactersCardsDad.style.display = 'none';
          spellsCardsDad.style.display = 'none';
          funFactsCardsDad.style.display = 'none';
          potionsCardsDad.style.display = 'block';
          booksCardsDad.style.display = 'none';
          misGraficas.style.display = 'none';
        });
      }
    });
  });

}
botones_pociones();



function botones_libros() {
  const librosMenu = document.querySelectorAll(".menu_libros");
  librosMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      list.classList.remove('menu_links--show');
      charactersCardsDad.style.display = 'none';
      spellsCardsDad.style.display = 'none';
      funFactsCardsDad.style.display = 'none';
      potionsCardsDad.style.display = 'none';
      booksCardsDad.style.display = 'block';
      misGraficas.style.display = 'none';
    });
  });

}
botones_libros();

function botones_datosCuriosos() {
  const datosCuriososMenu = document.querySelectorAll(".menu_datosCuriosos");
  datosCuriososMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
      list.classList.remove('menu_links--show');
      charactersCardsDad.style.display = 'none';
      spellsCardsDad.style.display = 'none';
      funFactsCardsDad.style.display = 'block';
      potionsCardsDad.style.display = 'none';
      booksCardsDad.style.display = 'none';
      misGraficas.style.display = 'none';
    });
  });
}
botones_datosCuriosos();

// 
function ocultarOpciones(){
  
  const addClick = ()=>{
    listElements.forEach(element =>{
      element.addEventListener('click',()=>{
        const subMenu= element.children[1]; 
        let height=0;
        element.classList.toggle('menu_item--active');
        if(subMenu.clientHeight === 0){
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  }
  addClick();
  const deleteStyleHeight = ()=>{
    listElements.forEach(element=>{
      if(element.children[1].getAttribute('style')){
        element.children[1].removeAttribute('style');
        element.classList.remove('menu_item--active');
      }
    });
  }

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 800){
      deleteStyleHeight();
    }
    else {
      addClick();
    }
  });
  if(window.innerWidth <=800){
    addClick();
  }
  menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'));
} 
ocultarOpciones();


const buscador = document.getElementById('search-characters'); //Se obtiene el elemento HTML

buscador.addEventListener('keyup', () => { //Se agrega un escuchador de eventos al input del buscador que se activa cada que el usuario suelta una tecla
  const buscarData = buscador.value.toLowerCase().trim(); //Se obtiene el valor actual del input, se convierte en minusculas y se eliminan los espacios en blanco al inicio y al final del string con .trim(), el resultado se almacena en buscarData

  const dataFiltrada = characters.filter(character => {
    return character.name.toLowerCase().includes(buscarData);
  }); //Se filtran los personajes y se almacenan en buscarData usando el 'name'. El resultado se almacena en dataFiltrada

  charactersCards.innerHTML = ''; // Se limpia el contenedor para mostrar los personajes filtrados y no se acumulen
  dataFiltrada.forEach(character => {
    showCharacters(character);
  }); // Se recorre el array de personajes filtrados (dataFiltrada) y se llama a showCharacters para mostrar cada personaje en la pagina
});

const buscadorHechizos = document.getElementById('search-spells');

buscadorHechizos.addEventListener('keyup', () => {
  const buscarHechizos = buscadorHechizos.value.toLowerCase().trim();

  const hechizosFiltrados = spells.filter(spell => {
    return spell.name.toLowerCase().includes(buscarHechizos);
  });
  
  spellsCards.innerHTML = '';
  hechizosFiltrados.forEach(spell => {
    showSpells(spell);
  });
});

const buscadorPociones = document.getElementById('search-potions');

buscadorPociones.addEventListener('keyup', () => {
  const buscarPociones = buscadorPociones.value.toLowerCase().trim();

  const pocionesFiltradas = potions.filter(potion => {
    return potion.name.toLowerCase().includes(buscarPociones);
  });

  potionsCards.innerHTML = '';
  pocionesFiltradas.forEach(potion => {
    showPotions(potion);
  });
});



