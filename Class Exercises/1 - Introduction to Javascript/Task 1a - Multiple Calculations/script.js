// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    let numberA = parseFloat(document.getElementById('numberA').value);
    let numberB = parseFloat(document.getElementById('numberB').value);
    let numberC = parseFloat(document.getElementById('numberC').value);

    let average = (numberA + numberB + numberC)/3
    let product = numberA * numberB * numberC
    let expression = numberA + (numberB * numberC)

document.getElementById('average').textContent = average
document.getElementById('product').textContent = product
document.getElementById('expression').textContent = expression

    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements
}
