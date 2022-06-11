'use strict';

//create spirit, herbal, bitter lists here
//should i group functions as a class to export all together?

const spirits = ['vodka', 'gin', 'rum', 'tequila', 'whiskey'];
const herbs = ['campari', 'suze', 'amaro nonino', 'brancamenta', 'averna', 'ancho reyes', 'creme de menthe', 'benedictine', 'ramazzotti', 'underberg', 'strega'];

function ingredientsPrint() {
    //From Udacity blog
    // Generate a number between 0 and 4, including 4
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    //let randomIndex be the variable for the result of math.random
    let randomSpiritIndex = generateRandomInteger(spirits.length, herbs.length);
    // let randomHerbIndex = generateRandomInteger(herbs.length);
    return spirits[randomSpiritIndex]; 
    
};


module.exports = ingredientsPrint(spirits);