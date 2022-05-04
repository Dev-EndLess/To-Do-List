// Prendi le Classi da Html

const addToList = document.querySelector('.add-to-list')
const aggiungi = document.querySelector('.aggiungi')
const devList = document.querySelector('.dev-List')
const removeDev = document.querySelector('.remove-dev')

function clickEvent() {
  aggiungi.addEventListener('click', add);
  removeDev.addEventListener('click',cleanList);
  devList.addEventListener('click' , remove); 
}
clickEvent();

// Crea un elemento 'li'
// Aggiungi una classe a 'li'
// Crea un textNode che fa riferimento al valore inserito di addToList e appendilo a 'li'
// Crea un link 'a'
// Aggiungi una classe al link
// Inserisco una <i> per il tasto X
// Appendi 'a' dentro 'li'
// Appendi 'li' dentro 'ul'
// Pulisci la riga addToList 

function add() {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.appendChild(document.createTextNode(addToList.value));
  const link = document.createElement('a');
  link.className = 'delete-item';
  link.innerHTML = '<i> X</i>';
  li.appendChild(link); 
  devList.appendChild(li);
  addToList.value = '';
}

function cleanList() {
  // console.log(devList.firstChild)
  while (devList.firstChild) { // ul > li
    devList.removeChild(devList.firstChild) // rimuove il primo list item 
  }
}

function remove(e) {
  // console.log(e.target)
  if(e.target.parentElement.classList.contains('delete-item')) { // prende l'elemento che ha come classe 'delete-item'
    e.target.parentElement.parentElement.remove() // attraversa il DOM fino a rimuovere 'li'
  }
}

