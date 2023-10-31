// code your solution here
function saturdayFun(fun ="roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function (office = 'go to the office') {
    return `This Monday, I will ${office}.`;

}
function wrapAdjective(flair ='*'){
    return function (innerFunction = 'special'){
    return `You are ${flair}${innerFunction}${flair}!`
    };
}