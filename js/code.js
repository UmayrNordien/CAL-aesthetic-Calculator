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

//ALLOW ONE DECIMAL ONLY
//NOTE: if decimal not working, refresh the page
function decimal(anyVal) {
    if (allowComa === true) {
        outputScreen.value = outputScreen.value + anyVal;
        allowComa = false;
    }
}

//alt method for singular decimal using array
    //case 5
// case `.`:
//         if(arr[arr.length-1] == `+` || arr[arr.length-1] == `-` ||arr[arr.length-1] == `*`|| arr[arr.length-1] == `/` || arr[arr.length-1] == `.` ){
//             output.innerHTML = output.innerHTML
//         } else{
//             output.innerHTML += num
//             arr.push(num)
//             console.log(arr)
//         }
//     break;
//     //by default - add to array and log
//     default,
//     output.innerHTML += num;
//     arr.push(num)
//     console.log(arr)



    
