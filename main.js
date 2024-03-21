
/* these constants store references to their fields that will be copied into story */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/* returns an array value at random */
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* this is the story text */
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

/* these arrays contain the random elements of the story */
const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["the soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];



/* this event listens for the button press the "result" function is run */
randomize.addEventListener('click', result);

/* partially completed result function i need to make this work properly*/
function result() {

    /* this variable is needed to create a new random story each time the button is pressed */
let newStory = storyText /* call this variable below in the replacement!!!! */

/* these variables take value from their respected arrays*/
const xItem = randomValueFromArray(insertx);
const yItem = randomValueFromArray(inserty);
const zItem = randomValueFromArray(insertz);


newStory = newStory.replaceALL(insertx, xItem);
newStory = newStory.replaceALL(inserty, yItem);
newStory = newStory.replaceALL(insertz, zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceALL("Bob", name);
  }

  
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)*5/9);
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}