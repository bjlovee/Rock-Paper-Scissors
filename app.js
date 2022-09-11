const Choices = {
    spock: {
        scissors: 'smashes',
        rock: 'vaporizes',
    },
    scissors: {
        paper: 'cuts',
        lizard: 'decapitates',
    },
    paper: {
        rock: 'covers',
        spock: 'disproves',
    },
    rock: {
        lizard: 'crushes',
        scissors: 'crushes',
    },
    lizard: {
        spock: 'poisons',
        paper: 'eats',
    },
};

function isWinner(player1, player2) {
    return player2 in Choices[player1]
}

        // WIN CONDITION
const spockChoice = 'spock'
if(spockChoice in Choices['scissors']) {
    // spoke beats this choice
}
if(spockChoice in Choices['rock']) {
    // spock beats this choice
}

const scissorsChoice = 'scissors'
if(scissorsChoice in Choices['paper']) {
//    scissors beat this choice  
}
if(scissorsChoice in Choices['lizard']) {
 //    scissors beat this choice  
}

const paperChoice = 'paper'
 if(paperChoice in Choices['rock']) {
     //    paper beat this choice  
}
 if(paperChoice in Choices['spock']) {
    //    paper beat this choice  
}
    
const rockChoice = 'rock'
 if(rockChoice in Choices['lizard']) {
    //    rock beat this choice  
}
if(rockChoice in Choices['scissors']) {
    //    rock beat this choice  
} 

const lizardChoice = 'lizard'
if(lizardChoice in Choices['spock']) {
    //    lizard beat this choice  
}
if(lizardChoice in Choices['paper']) {
//    lizard beat this choice  
} 

console.log(lizardChoice)
            