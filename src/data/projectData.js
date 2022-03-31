import quizImg from '../assets/images/wheeloffortune-screenshot.png';
import beerImg from '../assets/images/punkbeers-screenshot.png';
import calcImg from '../assets/images/jscalculator-screenshot.png';
import translatorImg from '../assets/images/morsecodetranslator-screenshot.png';
import battleshipsImg from '../assets/images/alienbattleships-screenshot.png';
import myTodosImg from '../assets/images/mytodos-screenshot.png';

const projectInfo = [
    
    {
        code: "https://github.com/tonylubin/Beer-Finder---Punk-Api---React",
        view: "https://tonylubin.github.io/Beer-Finder---Punk-Api---React",
        title: "BrewDog Beer Finder App",
        info: 'A project built in React that allows the user to search for Punk beers, by letter/name or filter functionality, via the external Punk beer Api. The results are shown to the user as a flipable "beer card" with extra info about the beer on the back of the card. Project also incorporates, where suitable, unit testing using jest/enzyme.', 
        imageUrl: beerImg, 
        imageAlt: "Screenshot of a beer finder app using BrewDogs punk beers Api", 
        isReversed: false,
        techstackIcons: [
            {
                size: "2xl",
                icon: "fa-brands fa-react",
                iconColor: "react"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            }        
        ] 
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
                size: "2xl",
                icon: "fa-brands fa-html5 fa-inverse",
                iconColor: "html"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            }       
        ] 
    },
    {
        code: "https://github.com/tonylubin/todos-app",
        view: "https://mytodosapp-4e40f.firebaseapp.com/",
        title: "MyTodos App",
        info: 'Designed in a modern and clean ui style using React, this Todos app allows a user to keep track of tasks/todos, in a list style type format. Built with a connection to Firebase as a BaaS to allow CRUD operations, a user can therefore write, update and delete a todo, as well as being able to show a todo as completed. Furthermore, authentication was added, thus to utilise the app a user must register via email and password and subsequently enter login details to retrieve their todos.', 
        imageUrl: myTodosImg, 
        imageAlt: "Screenshot of a app that deals with todos", 
        isReversed: false,
        techstackIcons: [
            {
                size: "2xl",
                icon: "fa-brands fa-react",
                iconColor: "react"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            },
            {
                size: "2xl",
                icon: "fa-solid fa-database",
                iconColor: "firebase"
            }       
        ] 
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
                size: "2xl",
                icon: "fa-brands fa-html5 fa-inverse",
                iconColor: "html"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            }       
        ]       
    },
    {
        code: "https://github.com/tonylubin/JS---Morse-Code-Translator",
        view: "https://tonylubin.github.io/JS---Morse-Code-Translator",
        title: "Morse Code Translator App",
        imageAlt: "Screenshot of a Morse code translator application",
        info: 'Tasked with creating a translator app, which adopts an "OOP" approach. Takes in user input for the translation between two languages => English/Morse code and vice-versa.', 
        imageUrl: translatorImg, 
        isReversed: true,
        techstackIcons: [
            {
                size: "2xl",
                icon: "fa-brands fa-html5 fa-inverse",
                iconColor: "html"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            }       
        ]         
    },
    {
        code: "https://github.com/tonylubin/JS---Aliens-Game-OOP",
        view: "https://tonylubin.github.io/JS---Aliens-Game-OOP",
        title: "Alien BattleShips - Javascript OOP Game",
        imageAlt: "Screenshot of BattleShips OOP Game", 
        info: 'A minimalist/retro designed project, written in Vanilla JS, based around the classic battleships game and built according to the principles of the "OOP" paradigm. Created on a grid system, targets hit are visualised by a "flashing animation" and the game is over when the mothership is destroyed.', 
        imageUrl: battleshipsImg, 
        isReversed: false,
        techstackIcons: [
            {
                size: "2xl",
                icon: "fa-brands fa-html5 fa-inverse",
                iconColor: "html"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-js",
                iconColor: "js"
            },
            {
                size: "2xl",
                icon: "fa-brands fa-sass",
                iconColor: "sass"
            }       
        ]       
    }
];

export default projectInfo;