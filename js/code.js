let outputScreen = document.getElementById("output-screen");
let allowComa = true;
// let arr =[]

//DISPLAY
function display(num){
    outputScreen.value += num;
}

//CLEAR BUTTON
function Clear(){
    outputScreen.value = "";    // replace with empty string
} 

//DELETE BUTTON
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);     //remove numbers by 1 from the right
}

//EQUAL BUTTON
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)  //error
    {
        alert("Syntax Error")       //error when there is more than 2 symbols and equal is clicked (calculate)
    }
}

//ALLOW ONE DECIMAL ONLY????
function decimal(anyVal) {
    if (allowComa === true) {
        outputScreen.value = outputScreen.value + anyVal;
        allowComa = false;
    }
}

// function display(num)
//     switch(num) {
//         case '.':
//             if (arr[arr.length-1]) == '.' 
//     } else {
//         output.innerhtml += num
//         arr.push(num)
//     }
//     break;
//     default



    
