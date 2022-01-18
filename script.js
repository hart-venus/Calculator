function sum(a,b){
    return(a+b)
}
function subtract(a,b){
    return(a-b)
}
function multiply(a,b){
    return(a*b)
}
function divide(a,b){
    if(b==0){
        return(0)
    }
    return(a/b)
}

function operate(operator,x,y){
    if(operator=='+'){
        return(sum(x,y))
    }
    else if(operator=='-'){
        return(subtract(x,y))
    }
    else if(operator=='×'){
        return(multiply(x,y))
    }
    else if(operator=='%'){
        return(divide(x,y))
    }
}

const display = document.getElementById('display')
const numButtons = document.getElementsByClassName('num')

let currOperator = ''
let isResult = false
let numA = 0

Array.prototype.slice.call(numButtons).forEach(element => {
    element.addEventListener('click', ()=>{
        if(display.textContent.length<22){
            if ((display.textContent != '0')&&(!isResult)){
                display.textContent = display.textContent + element.textContent
            }
            else{
                display.textContent = element.textContent
            }
        }
        
    })
});

const operatorList = document.getElementsByClassName('operator')
Array.prototype.slice.call(operatorList).forEach(element => {
    element.addEventListener('click', ()=>{
        if(currOperator==''){
            currOperator = element.textContent
            
            numA = display.textContent
            display.textContent = '0'
            currFactor = 1
        }
        else{
            display.textContent = operate(currOperator,parseFloat(numA),parseFloat(display.textContent))
            numA = display.textContent
            isResult = true
            currOperator = element.textContent
        }
    })
})

const Equals = document.getElementById('equals')
Equals.addEventListener('click', ()=>{
    if(currOperator!=''){
        display.textContent = operate(currOperator, parseFloat(numA), parseFloat(display.textContent))
        currOperator = ''
        isResult=false
    }
})

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click', ()=>{
    display.textContent = '0'
    currOperator = ''
    numA = 0
    isResult=false

})

const backButton = document.getElementById('back')

backButton.addEventListener('click', ()=>{
    if(display.textContent.length>1){
        display.textContent = display.textContent.slice(0,-1)
    }
    else{
        display.textContent = 0
    }
        
})

const pointButton = document.getElementById('.')

pointButton.addEventListener('click', ()=>{
    if((!display.textContent.includes('.'))&&(display.textContent.length<21)){
        display.textContent = display.textContent+'.'
    }
})