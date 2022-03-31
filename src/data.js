import quizImg from './assets/images/wheeloffortune-screenshot.png';
import beerImg from './assets/images/punkbeers-screenshot.png';
import calcImg from './assets/images/jscalculator-screenshot.png';
import translatorImg from './assets/images/morsecodetranslator-screenshot.png';
import battleshipsImg from './assets/images/alienbattleships-screenshot.png';

const projectInfo = [
    
    {
        code: "https://github.com/tonylubin/Beer-Finder---Punk-Api---React",
        view: "",
        title: "BrewDog Beer Finder App", 
        info: "Built a beer finder application with REACT, that uses an external Api. Has the functionality of being able to search the Punk Api beer catalogue by name/letter, with the added feature of filters. The project demonstrates the ability to build an app in React, with the use of hooks such as useState and useEffect, and being able to leverage an external Api and its documentation to display the info and amend the fetch search queries.", 
        imageUrl: beerImg, 
        imageAlt: "Screenshot of a beer finder app using BrewDogs punk beers Api", 
        isReversed: false 
    },
    {
        code: "https://github.com/tonylubin/JS---Quiz-Game.git",
        view: "https://tonylubin.github.io/JS---Quiz-Game",
        title: "Spin a Fortune - Javascript Quiz Game ",
        imageAlt: "Screenshot of a wheel of fortune type quiz game", 
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores culpa, reiciendis, consectetur id consequuntur sequi nam natus suscipit quia perferendis quam dolores cumque accusantium sit repellat enim molestias! Inventore laudantium, illo illum, accusantium voluptatibus, ut omnis totam laboriosam assumenda quia", 
        imageUrl: quizImg, 
        isReversed: true       
    },
    {
        code: "https://github.com/tonylubin/JS---Calculator",
        view: "https://tonylubin.github.io/JS---Calculator",
        title: "Javascript Calculator App",
        imageAlt: "Screenshot of a JS Calculator App", 
        info: "One of my first projects, with the task of being written in vanilla Javascript only. A working calculator with addition, multiplication, subtraction and division. Has the added functionality of the use of decimal points and percentages. The calculator has a 'clear' button to reset values and a 'backspace' button to delete the last value entered on screen. Designed in a neomorphic style using Sass and Bem convention.", 
        imageUrl: calcImg, 
        isReversed: false       
    },
    {
        code: "https://github.com/tonylubin/JS---Morse-Code-Translator",
        view: "https://tonylubin.github.io/JS---Morse-Code-Translator",
        title: "Morse Code Translator App",
        imageAlt: "Screenshot of a Morse Code Translator", 
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores culpa, reiciendis, consectetur id consequuntur sequi nam natus suscipit quia perferendis quam dolores cumque accusantium sit repellat enim molestias! Inventore laudantium, illo illum, accusantium voluptatibus, ut omnis totam laboriosam assumenda quia", 
        imageUrl: translatorImg, 
        isReversed: true       
    },
    {
        code: "https://github.com/tonylubin/JS---Aliens-Game-OOP",
        view: "https://tonylubin.github.io/JS---Aliens-Game-OOP",
        title: "Alien BattleShips - Javascript OOP Game",
        imageAlt: "Screenshot of BattleShips OOP Game", 
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores culpa, reiciendis, consectetur id consequuntur sequi nam natus suscipit quia perferendis quam dolores cumque accusantium sit repellat enim molestias! Inventore laudantium, illo illum, accusantium voluptatibus, ut omnis totam laboriosam assumenda quia", 
        imageUrl: battleshipsImg, 
        isReversed: false       
    }
];

export default projectInfo;