import quizImg from "../assets/images/fortunegame-laptopscreen.png";
import calcImg from "../assets/images/js-calc-laptopscreen.png";
import translatorImg from "../assets/images/morsecode-laptopscreen.png";
import battleshipsImg from "../assets/images/alienbattleships-laptopscreen.png";
import myTodosImg from "../assets/images/mytodos-laptopscreen.png";
import beerImg from "../assets/images/beer-finder-app.png";
import moneySaverImg from "../assets/images/money-saver-app.png";
import { techSkills, expressSvg } from "./skillsData";


// find index of icon in skills data
const index = (skill) => {
  let foundObj = techSkills.findIndex(skillObj => skillObj.title === skill);
  return techSkills[foundObj];
};

const projectInfo = [
  {
    code: "https://github.com/tonylubin/webscraper---node-js.git",
    view: "https://github.com/tonylubin/webscraper---node-js.git",
    title: "Money Saver App",
    info: "An web scraping app, using Puppeteer, that allows a user to set up a price alert for a product from the retailer Boots. Written entirely for the back-end in Node js with the server built on Express. Styled with Bootstrap and html pages server-side rendered with EJS. Alerts are stored & modelled with Mongoose & MongoDb. App is tasked scheduled (cron job) to run and sends a user an email when the product is cheaper.",
    imageUrl: moneySaverImg,
    imageAlt: "Screenshot of a webscraping app called Money saver app",
    isReversed: false,
    techstackIcons: [
      {
        viewBox: index("NodeJs").viewBox,
        svgInfo: index("NodeJs").svgInfo
      },
      {
        viewBox: index("MongoDb").viewBox,
        svgInfo: index("MongoDb").svgInfo
      },
      {
        viewBox: index("Bootstrap").viewBox,
        svgInfo: index("Bootstrap").svgInfo
      },
      {
        viewBox: expressSvg.viewBox,
        svgInfo: expressSvg.svgInfo
      }
    ]
  },
  {
    code: "https://github.com/tonylubin/Beer-Finder-Punk-api",
    view: "https://tonylubin.github.io/Beer-Finder-Punk-api",
    title: "BrewDog Beer Finder App",
    info: 'A project built in React that allows the user to search for Punk beers, by letter/name or filter functionality, via the external Punk beer Api. The results are shown to the user as a flipable "beer card" with extra info about the beer on the back of the card. Project also incorporates, where suitable, unit testing using jest/enzyme.',
    imageUrl: beerImg,
    imageAlt: "Screenshot of a beer finder app using BrewDogs punk beers Api",
    isReversed: true,
    techstackIcons: [
      {
        viewBox: index("React").viewBox,
        svgInfo: index("React").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
    ],
  },
  {
    code: "https://github.com/tonylubin/todos-app",
    view: "https://mytodosapp-4e40f.firebaseapp.com/",
    title: "MyTodos App",
    info: "An app for a user to keep track of tasks. Built with a connection to Firebase as a BaaS to allow CRUD operations, a user can write, update and delete a todo, as well as being able to show a todo as completed. Furthermore, authentication was added, thus to utilise the app a user must be registered.",
    imageUrl: myTodosImg,
    imageAlt: "Screenshot of a app that deals with todos",
    isReversed: false,
    techstackIcons: [
      {
        viewBox: index("React").viewBox,
        svgInfo: index("React").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
      {
        viewBox: index("Firebase").viewBox,
        svgInfo: index("Firebase").svgInfo
      },
    ],
  },
  {
    code: "https://github.com/tonylubin/JS---Quiz-Game.git",
    view: "https://tonylubin.github.io/JS---Quiz-Game",
    title: "Spin a Fortune - Javascript Quiz Game ",
    imageAlt: "Screenshot of a wheel of fortune type quiz game",
    info: 'Approached with the mindset of mobile-first, this Javascript project is based upon the classic quiz game "wheel of fortune". It is a two player word guessing game, whereby highest score wins. Incorrect guesses and player turns are handled "automatically" i.e. without user input. Players spin an animated wheel for points and guess letters via the projects purpose built keyboard.',
    imageUrl: quizImg,
    isReversed: true,
    techstackIcons: [
      {
        viewBox: index("Html5").viewBox,
        svgInfo: index("Html5").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
    ],
  },
  {
    code: "https://github.com/tonylubin/JS---Morse-Code-Translator",
    view: "https://tonylubin.github.io/JS---Morse-Code-Translator",
    title: "Morse Code Translator App",
    imageAlt: "Screenshot of a Morse code translator application",
    info: 'Tasked with creating a translator app, which adopts an "OOP" approach. Takes in user input for the translation between two languages => English/Morse code and vice-versa.',
    imageUrl: translatorImg,
    isReversed: false,
    techstackIcons: [
      {
        viewBox: index("Html5").viewBox,
        svgInfo: index("Html5").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
    ],
  },
  {
    code: "https://github.com/tonylubin/JS---Aliens-Game-OOP",
    view: "https://tonylubin.github.io/JS---Aliens-Game-OOP",
    title: "Alien BattleShips - Javascript OOP Game",
    imageAlt: "Screenshot of BattleShips OOP Game",
    info: 'A minimalist/retro designed project, written in Vanilla JS, based around the classic battleships game and built according to the principles of the "OOP" paradigm. Created on a grid system, targets hit are visualised by a "flashing animation" and the game is over when the mothership is destroyed.',
    imageUrl: battleshipsImg,
    isReversed: true,
    techstackIcons: [
      {
        viewBox: index("Html5").viewBox,
        svgInfo: index("Html5").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
    ],
  },
  {
    code: "https://github.com/tonylubin/JS---Calculator",
    view: "https://tonylubin.github.io/JS---Calculator",
    title: "Javascript Calculator App",
    imageAlt: "Screenshot of a JS Calculator App",
    info: "A working calculator with addition, multiplication, subtraction, division and the added functionality of decimal points and percentages. The calculator has a 'clear' button to reset values and a 'backspace' button to delete the last value entered on screen. Designed in a neomorphic style using Sass, the Bem convention and written in vanilla Javascript.",
    imageUrl: calcImg,
    isReversed: false,
    techstackIcons: [
      {
        viewBox: index("Html5").viewBox,
        svgInfo: index("Html5").svgInfo
      },
      {
        viewBox: index("Javascript").viewBox,
        svgInfo: index("Javascript").svgInfo
      },
      {
        viewBox: index("Sass").viewBox,
        svgInfo: index("Sass").svgInfo
      },
    ],
  },
];

export default projectInfo;
