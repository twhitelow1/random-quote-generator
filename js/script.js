/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `"I'm about to do to you what Limp Bizkit did to music in the late '90s."`,
    source:`deadpool`,
    actor: ``,
    citation:`Deadpool Movie`,
    year: `2016`
  },
  {
    quote: `"This drink, I like it. Another!"`,
    source:`Thor `,
    actor: `Chris Hemsworth`,
    citation:`Thor`,
    year: `2011`
  },
  {
    quote: `"“I can do this all day.”"`,
    source:`Steve Rodgers `,
    actor: `Chris Evans`,
    citation:`Captain America: The First Avenger`,
    year: `2011`
  },
  {
    quote: `“That’s my secret, Captain. I’m always angry.”`,
    source:`Bruce Banner`,
    actor: `Mark Ruffalo`,
    citation:`The Advengers`,
    year: `2012`
  },
  {
    quote: `“It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge fan of the way you lose control and turn into an enormous green rage monster.”`,
    source:`Tony Stark`,
    actor: `Robert Downey Jr`,
    citation:`The Advengers`,
    year: `2012`
  },
  {
    quote: `“Hey fellas, either one of you know where the Smithsonian is? I’m here to pick up a fossil.”`,
    source:`Natasha Romanoff`,
    actor: `Scarlet Johansson`,
    citation:`2014`,
    year: `2014`
  }
]

/***
 * `getRandomNum` function
***/

const getRandomNum = (min, max) =>{
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

/***
 * `getRandomQuote` function
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
  
  let html =`
<p class="quote">${quote.quote}</p>
<p class="source">${quote.source} (${quote.actor})<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>
`;

document.querySelector('.quotebox').innerHTML = html;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);