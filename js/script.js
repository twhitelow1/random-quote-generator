/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Author: Todd Whitelow Jr.

An application made for my techdegree that showcases unit 1 skills.
Generates a random quote for display on the page.
******************************************/

/*** 
 * `quotes` array 
 * 
 * List of quotes to be used .
 *
***/
const quotes = [
  {
    quote: `I'm about to do to you what Limp Bizkit did to music in the late '90s.`,
    source:`deadpool`,
  },
  {
    quote: `This drink, I like it. Another!`,
    source:`Thor `,
    actor: `Chris Hemsworth`,
    citation:`Thor`,
    year: `2011`
  },
  {
    quote: `I can do this all day.`,
    source:`Steve Rodgers `,
    actor: `Chris Evans`,
    citation:`Captain America: The First Avenger`,
    year: `2011`
  },
  {
    quote: `That’s my secret, Captain. I’m always angry.`,
    source:`Bruce Banner`,
    actor: `Mark Ruffalo`,
    citation:`The Advengers`,
    year: `2012`
  },
  {
    quote: `It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge fan of the way you lose control and turn into an enormous green rage monster.`,
    source:`Tony Stark`,
    actor: `Robert Downey Jr`,
    citation:`The Advengers`,
    year: `2012`
  },
  {
    quote: `Hey fellas, either one of you know where the Smithsonian is? I’m here to pick up a fossil.`,
    source:`Natasha Romanoff`,
    actor: `Scarlet Johansson`,
    citation:`2014`,
    year: `2014`
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
  //console.log(color);
  document.body.style.backgroundColor = color;
}

/***
 * `getRandomQuote` function
 * 
 *  *  Changes the background color of the the body using a random color.
 *  Uses the getRandomColor function to generate a rgb color
 *  Uses the document object to add the background color that is generated
 *
 * @param {number} color - Stores the value of the getRandomColor rgb string
 * @return none
***/

const getRandomQuote = () =>{
  let randomNumber = getRandomNum(0, quotes.length - 1);
  return quotes[randomNumber];
  
}

/***
 * `printQuote` function
***/

const printQuote = () =>{
  const quote = getRandomQuote();
  console.log(quote);
  let html =`
<p class="quote">${quote.quote}</p>
<p class="source">${quote.source}
`;

if(quote.actor !== undefined){
  html += `(${quote.actor})`;
}

if(quote.citation !== undefined){
  html += `<span class="citation">${quote.citation}</span>`;
}

if(quote.year !== undefined){
  html += `<span class="year">${quote.year}</span>`;
}

html += `</p>`

document.getElementById('quote-box').innerHTML = html;
changeBgColor();

}

// Set quotes to automatically load a new quote every 15 seconds
setInterval(printQuote, 15000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);