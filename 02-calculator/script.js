const display=document.getElementById('display');
const buttons=document.querySelectorAll('button');// get ALL buttons from the page


// variable to store the whole expression
// like "7+5*2"
const operators=['+','-','*','/'];
let expression='';
// loop through every button
buttons.forEach(function(button){
    button.addEventListener('click',function(){
       let value=button.textContent;
       if(value==='C'){
        expression='';
         display.value=expression;
       }
        else if(value === "="){
            let lastChar = expression[expression.length - 1];

            if(operators.includes(lastChar)){
                return;
            }
            expression = eval(expression);
            display.value = expression;//Input elements store content in: .value property
        }

        else{
            let lastChar=expression[(expression.length-1)];//checking the last char of the exp
            if(operators.includes(value) &&operators.includes(lastChar)) {
                return;//if(the cuurent value and last char are both operators) then return and do nothing
            }
            expression += value;
            display.value = expression;//we use .value because for input field we use value to do any manupulation
        }

});
});