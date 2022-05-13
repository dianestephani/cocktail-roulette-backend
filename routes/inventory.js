'use strict';

//create spirit, herbal, bitter lists here
//should i group functions as a class to export all together?

const spirits = ['vodka', 'gin', 'rum', 'tequila', 'whiskey'];

function spiritsPrint() {
    //From Udacity blog
    // Generate a number between 0 and 4, including 4
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    //let randomIndex be the variable for the result of math.random
    let randomIndex = generateRandomInteger(4);
    return spirits[randomIndex];
};


module.exports = spiritsPrint(spirits);