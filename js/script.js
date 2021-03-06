/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Author: Todd Whitelow Jr.

An application made for my techdegree that showcases unit 1 skills.
Generates a random quote for display on the page.

I am hopeing to get an Exceeds Expectations grade on this project
******************************************/

/*** 
 * `quotes` array 
 * 
 * List of quotes to be used .
 * 
 * Map of quote object
 * @property {string} quote - The quote
 * @property {string} source - Character who said the quote
 * @property {string} citation - Marvel movie that this quote is from
 * @property {string} year - Year this movie was relased
***/
const quotes = [
  {
    quote: `Oh, I’m sorry. I don’t know how this machine works…`,
    source:`Peter Quill AKA Star Lord`,
    citation: `Guardians of the Galaxy`,
    img: `https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/Star-Lord_AIW_Profile.jpg`
  },
  {
    quote: `This drink, I like it. Another!`,
    source:`Thor `,
    actor: `Chris Hemsworth`,
    citation:`Thor`,
    year: `2011`,
    img: `https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg`
  },
  {
    quote: `I can do this all day.`,
    source:`Steve Rodgers `,
    actor: `Chris Evans`,
    citation:`Captain America: The First Avenger`,
    year: `2011`,
    img: `https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg`
  },
  {
    quote: `That’s my secret, Captain. I’m always angry.`,
    source:`Bruce Banner`,
    actor: `Mark Ruffalo`,
    citation:`The Advengers`,
    year: `2012`,
    img: `https://cdn.collider.com/wp-content/uploads/2018/04/avengers-infinity-war-poster-mark-ruffalo-hulk.jpg`
  },
  {
    quote: `It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge fan of the way you lose control and turn into an enormous green rage monster.`,
    source:`Tony Stark`,
    actor: `Robert Downey Jr`,
    citation:`The Advengers`,
    year: `2012`,
    img: `https://vignette.wikia.nocookie.net/manowrites/images/d/d9/IronMan-EndgameProfile_%281%29.jpg`
  },
  {
    quote: `Hey fellas, either one of you know where the Smithsonian is? I’m here to pick up a fossil.`,
    source:`Natasha Romanoff`,
    actor: `Scarlet Johansson`,
    citation:`Captain America: The Winter Soldier`,
    year: `2014`,
    img:`https://vignette.wikia.nocookie.net/marveldatabase/images/6/68/Avengers_Endgame_poster_044_Textless.jpg`
  }
]

/***
 * `getRandomNum` function
 * 
 * Returns a random number between two numbers.
 *
 * @param {number} min - The lowest number value.
 * @param {number} max - The highest number value.
 * @return {number} The random number value.
***/

const getRandomNum = (min, max) =>{
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

/***
 * `getRandomColor` function
 * 
 *  Returns a random color.
 *  Uses the getRandomNum function to generate a number  0 - 255  for each rgb value and returns the rgb() color
 *
 * @param {number} red - The rgb red number 0 - 255
 * @param {number} green - The rgb green number 0 - 255
 * @param {number} blue - The rgb blue number 0 - 255
 * @return {string} The random rgb value.
***/

const getRandomColor = () =>{
  let red = getRandomNum(0, 255);
  let green = getRandomNum(0, 255);
  let blue =  getRandomNum(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}


/***
 * `setRandomBgColor` function
 * 
 *  Changes the background color of the the body using a random color.
 *  Uses the getRandomColor function to generate a rgb color
 *  Uses the document object to add the background color that is generated
 *
 * @param {number} color - Stores the value of the getRandomColor rgb string
 * @return none
***/

const changeBgColor = () =>{
  color = getRandomColor();
  
  document.body.style.backgroundColor = color;
}

/***
 * `getRandomQuote` function
 * 
 *  Changes the background color of the the body using a random color.
 *  Uses the getRandomColor function to generate a rgb color
 *  Uses the document object to add the background color that is generated
 *
 * @param {number} color - Stores the value of the getRandomColor rgb string
 * @return none
***/

const getRandomQuote = () =>{
  let randomNumber = getRandomNum(0, quotes.length);
  return quotes[randomNumber];
  
}

/***
 * `printQuote` function
 * 
 *  Changes the background color of the the body using a random color.
 *  Uses the getRandomColor function to generate a rgb color
 *  Uses the document object to add the background color that is generated
 *
 * @param {number} quote - Stores the random quote object generated from getRandomQuote()
 * @param {number} html - Stores the html string that will be built with interpolated quote object data and then injected in to html
 * @return undefined this function just changes the dom object quote-box where the quote is displayed
***/

const printQuote = () =>{
  // grab a random quote
  const quote = getRandomQuote();

  // Start the html string with the 2 required quote object properties
  let html =`
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}
  `;

  // Check the 3 optional quote properties for having an assigned value and if they do have a value then add it to the html
  if(quote.actor !== undefined){
    html += `(${quote.actor})`;
  }

  if(quote.citation !== undefined){
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if(quote.year !== undefined){
    html += `<span class="year">${quote.year}</span>`;
  }

  // Close last paragraph now that we have checked for the extra object properties
  html += `</p>`

  //Now add the quote to the html with getElementByID
  document.getElementById('quote-box').innerHTML = html;

  //Now add the image to the html element ID quote-image-box
  let imgHTML = ``;
  if(quote.img === undefined){
     imgHTML = ``;
     document.getElementById('quote-img-box').innerHTML = imgHTML;
  }else{
    imgHTML = `<img id="quote-image" class="quote-image" src="${quote.img}" alt"${quote.actor}" > `;
    document.getElementById('quote-img-box').innerHTML = imgHTML;
  }

  // After injecting the quote into html change the bg color
  changeBgColor();
}

// Call the printQuote() function to start with a random quote
printQuote();

// Set quotes to automatically load a new quote every 15 seconds
setInterval(printQuote, 15000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);