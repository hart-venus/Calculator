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
    return(a/b)
}

function operate(operator,x,y){
    if(operator==1){
        return(sum(x,y))
    }
    else if(operator==2){
        return(subtract(x,y))
    }
    else if(operator==3){
        return(multiply(x,y))
    }
    else if(operator==4){
        return(divide(x,y))
    }
}

const display = document.getElementById('display')
const numButtons = document.getElementsByClassName('num')
Array.prototype.slice.call(numButtons).forEach(element => {
    element.addEventListener('click', ()=>{
        
        if (display.textContent != '0'){
            display.textContent = display.textContent + element.textContent
        }
        else{
            display.textContent = element.textContent
        }
    })
});

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click', ()=>{
    display.textContent = '0'
})