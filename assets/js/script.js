document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('you clicked submit')
            }else {
                let gameType = this.getAttribute('data-type')
                runGame(gameType)
            }
        })
    }
    runGame('addition')
})
/**
 * the main game "loop" called when the script is first loaded,
 * and after the user's answer has been processed
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)
    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2)
    }else {
        alert(`Error: unknown game type ${gameType}`)
        throw('Unknown game type')
    }

}
function checkAnswer(){
    
}
function calculateCorrectAnswer(){
    
}
function increamentScore(){
    
}
function increatmentWrongAnswer(){
    
}
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').innerText = operand1
    document.getElementById('operand2').innerText = operand2
    document.getElementById('operator').innerText = '+'
    
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}