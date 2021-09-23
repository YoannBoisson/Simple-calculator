
const equal = document.getElementById('equal');



const result = document.getElementById('resultat');


function calcul(firstValue, secondValue, operator) {
    let number1 = parseInt(firstValue);
    let number2 = parseInt(secondValue);
    
    if (number2 === 0 && operator === "/") {
        return "Error";
     } else if (operator === '-'){
       return number1 - number2;
     } else if (operator === '/'){
       return number1 / number2;
     } else if (operator === '%'){
       return number1 % number2;
     } else if (operator === '+'){
       return number1 + number2;
     } else if (operator === '*')
        return number1 * number2;
   }
   
   equal.addEventListener('click', () => {
    const operator = document.getElementById('operand').value;
    const firstValue = parseInt(document.getElementById('firstValue').value) ;
    const secondValue = parseInt(document.getElementById('secondValue').value) ;
    result.innerHTML = `${Math.round(calcul(firstValue, secondValue, operator)* 100)/100}`;
})


