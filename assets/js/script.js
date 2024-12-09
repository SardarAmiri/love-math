document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                checkAnswer()
            }else {
                let gameType = this.getAttribute('data-type')
                runGame(gameType)
            }
        })
    }
    document.getElementById('answer-box').addEventListener('keydown', function(e) {
        if(e.key === 'Enter'){
            checkAnswer()
        }
    })
    runGame('addition')
})
/**
 * the main game "loop" called when the script is first loaded,
 * and after the user's answer has been processed
 */
function runGame(gameType){
    document.getElementById('answer-box').value = ''
    document.getElementById('answer-box').focus()

    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2)
    }else if(gameType === 'subtract'){
        displaySubtractQuestion(num1, num2)
    }
    else if(gameType === 'multiply'){
        displayMultiplyQuestion(num1, num2)
    }else if(gameType === 'devision'){
        displayDivisionQuestion(num1, num2)
    }
    else {
        alert(`Error: unknown game type ${gameType}`)
        throw('Unknown game type')
    }

}

/**
 * Check user answer and the correct answer return from calculateCorrectAnswer function
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value)
    const correctAnswer = calculateCorrectAnswer()
    console.log(correctAnswer[0])
    const isCorrect = userAnswer === correctAnswer[0]
    if(isCorrect){
        increamentScore()
    }else {
        increatmentWrongAnswer()
    }
    
    runGame(correctAnswer[1])
    
}
/**
 * 
 * get operands and operator directly from dom and return an array with correct answer and addition
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById('operator').innerText
    switch(operator){
        case '+':
            return [operand1 + operand2, 'addition']
        case '-':
            return [operand1 - operand2, 'subtract']
        case 'x':
            return [operand1 * operand2, 'multiply']
        case '÷':
            return [operand1 / operand2, 'devision']
        default:
            alert('unimplemented operator', operator)
            throw `unimplemented operator ${operator}`

    }
   
    
}

/**
 * get the currrent socre from the dom and then increament by 1
 */
function increamentScore(){
    let score = parseInt(document.getElementById('score').textContent)
    document.getElementById('score').innerText = ++score
}
/**
 * get the current incorrect from the DOM and then decreament by 1
 */
function increatmentWrongAnswer(){
    let score = parseInt(document.getElementById('incorrect').textContent)
    document.getElementById('incorrect').innerText = ++score
    
    
}
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').innerText = operand1
    document.getElementById('operand2').innerText = operand2
    document.getElementById('operator').innerText = '+'
    
}
function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').innerText = operand1 > operand2 ? operand1 : operand2
    document.getElementById('operand2').innerText = operand1 > operand2 ? operand2 : operand1
    document.getElementById('operator').innerText = '-'
    
}
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').innerText = operand1
    document.getElementById('operand2').innerText = operand2
    document.getElementById('operator').innerText = 'x'
    
}
function displayDivisionQuestion(operand1, operand2){
    operand1 = operand1 * operand2;
    document.getElementById('operand1').innerText = 
    document.getElementById('operand2').innerText = 
    document.getElementById('operator').innerText = '÷'
   
    
}