// Prendi le Classi da Html

const addTolist = document.querySelector('.add-to-list')
const aggiungi = document.querySelector('.aggiungi')
const devList = document.querySelector('.dev-List')
const removeDev = document.querySelector('.remove-dev')


clickEvent();

function clickEvent() {
  aggiungi.addEventListener('click', add);
  removeDev.addEventListener('click',cleanList);
  devList.addEventListener('click' , remove); 
}

// creare elemento 'li'
// dare una classe a 'li'
// il testo che verra' inserito si appendera al 'li'
// creare un link 'a'
// dare una classe al link
// inserico una <i> per il tasto remove
// appendere 'a' dentro 'li'
// appendere 'li' dentro 'ul'
// pulire la riga add to list  

function add(e) {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.appendChild(document.createTextNode(addTolist.value));
  const link = document.createElement('a');
  link.className = 'delete-item';
  link.innerHTML = '<i> X</i>';
  li.appendChild(link); 
  devList.appendChild(li);
  addTolist.value = '';
  
  // e.preventDefault();
}

function cleanList() {
  while (devList.firstChild) {
    console.log(devList.firstChild)
    devList.removeChild(devList.firstChild)
  }
}

function remove(e) {
  console.log(e.target)
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove()
  }
}

