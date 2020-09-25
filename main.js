
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');




function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = [ 'Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen','Disneyland','the White House'];
const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click',result);

function result() {
  const newStory = storyText;
  /* Copie de storyText pour modification */
  let copyStory = newStory;

  /* Les emplacements à modifier dans storyText */
  const xInsert = ':insertx:';
  const yInsert = ':inserty:';
  const zInsert = ':insertz:';
  const textName = 'Bob';


  /* Récuperer une valeur aléatoire des  tabelaux */
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  /* Remplace la valeur ':insert:' par une  valeur aléatoire */
  /* :xInsert: est présent deux fois dans le texte */

  replaceItem(xInsert,xItem);
  replaceItem(yInsert,yItem);
  replaceItem(zInsert,zItem);
  replaceItem(xInsert,xItem);



  function replaceItem(insert,item){
    if(newStory.includes(insert)){
        copyStory = copyStory.replace(insert,item);
    }
  }

  const regex = /[a-zA-Z]/g;
  if(customName.value !== '' && customName.value.match(regex)) {
    let name = customName.value;
      if(newStory.includes(textName)){
          copyStory = copyStory.replace(textName,name.charAt(0).toUpperCase()+ name.slice(1));
      }
  }

  if(document.getElementById('uk').checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);
    copyStory = copyStory.replace(weight + ' ' + 'pounds',poudConvert(weight) + ' ' + 'pierre');
    copyStory = copyStory.replace(temperature + ' ' +  'fahrenheit' ,fahrenheitConvert(temperature) + ' ' + 'celsius');

  }




  /* Affiche la copy de storyText  */
  story.textContent = copyStory;
  story.style.visibility = 'visible';
}

/* Convert Livre -> Pierre Livres = 0.0714 Pierres */
function poudConvert(livres){
  const pierre = 0.0714;
  return livres * pierre ;
}
/* Fahrenheit en centigrade */
function fahrenheitConvert(fahrenheit){
  const minus = 32;
  const times = 0.555555555556;
  return parseInt((fahrenheit - minus) * times);
}





