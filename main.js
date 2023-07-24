let keyButtons = document.getElementsByClassName('numpad')
keyButtons = Array.from(keyButtons)
let editButtons = document.getElementsByClassName('edit-button')
editButtons = Array.from(editButtons)
let operation = document.getElementById('operation')
let result = document.getElementById('result')

keyButtons.forEach(button => {
    button.addEventListener('click', _ =>{
        let clickedBtn = button.innerHTML
        displayOperation(clickedBtn)
    })
})

editButtons.forEach(button => {
    button.addEventListener('click', _ => {
        if(button.textContent == "CLEAR"){
            clearOpeationDisplay()
        }else if(button.textContent == "DELETE"){
            deleteOperationDisplay()
        }
    })
})


// display operation
function displayOperation(btn){
    if(btn == "="){
        return getOperationStr(operation.textContent)
    }
    operation.innerText += btn
}
function getOperationStr(str){
    let operand = ""
    if(str.includes("+")){
        operand = "+"
    }else if(str.includes("-")){
        operand = "-"
    }else if(str.includes("x")){
        operand = "x"
    }else if(str.includes("÷")){
        operand = "/"
    }

    arr = str.split(/[+x*÷]+/g)
    if(arr[0].includes(".")){
        arr[0] = parseFloat(arr[0])
    }else{
        arr[0] = Number(arr[0])
    }
    if(arr[1].includes(".")){
        arr[1] = parseFloat(arr[1])
    }else{
        arr[1] = Number(arr[1])
    }
    console.log(arr[0])
    console.log(arr[1])
    console.log(operand)
    let resultOp = operate(arr[0],arr[1],operand)
    resultOp = String(resultOp)
    if(resultOp.includes(".")){
        resultOp = parseFloat(resultOp)
        resultOp = resultOp.toFixed(1)
    }
    result.innerHTML = resultOp
    console.log(resultOp)
}

function clearOpeationDisplay(){
    operation.textContent = ""
    result.textContent = 0
}
function deleteOperationDisplay(){
    operation.textContent = operation.textContent.slice(0,-1)
}


// To solve
function operate(a,b,op){
    if(b == undefined || a == undefined){
        operation.textContent = "ERROR"
    }
    let result = 0
    switch(op){
        case "+":
            result = add(a,b)
            break
        case "-":
            result = subtract(a,b)
            break
        case "x":
            result = multiply(a,b)
            break
        case "/":
            result = divide(a,b)
            break
    }
    return result
}


// math functions
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide (a,b){
    return a/b
}