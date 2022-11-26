let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let numberString = "";
let value1 = 0;
let value2 = 0;
let operators = [0,1,2,3,4];
let operatorIndex = 0;
let numPressed = true;

//ACTUAL CALCULATOR OPERATIONS
{
    //DISPLAY VALUE TO THE SCREEN
    function displayValue(){
        document.getElementById("displayBox").innerHTML =
        numberString;
        console.log(numberString);
    }

    //RESETS THE VALUES
    function clearValue(){
        numberString = "";
        document.getElementById("displayBox").innerHTML = 0;
    }

    //DELETES THE LAST DIGIT
    function deleteValue(){
        let array = numberString.split('');
        array.pop();
        numberString = array.join('');
        displayValue();
    }

    //ADD NUMBERS IN CORRECT DECIMAL POSITION
    function concatNumbers(num){
        
        numberString = numberString + num;
        displayValue();
    }

    //OPERATOR SELECTION USING OPERATOR INDEX
    function selectOperator(num){
        operatorIndex = parseFloat(num);
        value1 = parseFloat(numberString);
        numberString = "";

    }

    //PERFORM THE OPERATION ON VALUES
    function operation(operator = 0){
        value2 = parseFloat(numberString);

        if(operator == 1)
            {numberString = value1 + value2; numberString = numberString.toString(10);}
        if(operator == 2)
            {numberString = value1 - value2; numberString = numberString.toString(10);}
        if(operator == 3)
            {numberString = value1 * value2; numberString = numberString.toString(10);}
        if(operator == 4)
            {numberString = value1 / value2; numberString = numberString.toString(10);}
        if(operator == 5)
            {numberString = value1 % value2; numberString = numberString.toString(10);}

        if(numPressed!=0){
            let temp = value2;
            value2 = value1;
            value1 = temp;
        }

        numPressed = 0;
        
        displayValue();
    }
}

//ONCLICK ACTION FOR BUTTONS
{
    //NUMBER BUTTON ACTION
    for(let x of numbers){
        document.getElementsByClassName("numberButton")[x].onclick =
        function() {   numPressed++; concatNumbers(document.getElementsByClassName("numberButton")[x].value) };
    }

    //CLEAR BUTTON ACTION
    document.getElementById("clearButton").onclick = function() {   clearValue()    };

    //DELETE BUTTON ACTION
    document.getElementById("deleteButton").onclick = function() {   deleteValue()    };

    //OPERATOR BUTTON ACTION
    for(let x of operators){
        document.getElementsByClassName("operatorButton")[x].onclick =
        function() {   selectOperator(document.getElementsByClassName("operatorButton")[x].value) };
    }

    //ASSIGNMENT BUTTON ACTION
    document.getElementById("assignmentButton").onclick =
    function(){
        operation(operatorIndex);
        displayValue();
    };
}