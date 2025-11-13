// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
let radius = parseFloat(document.getElementById('radius').value);
let area = parseFloat(document.getElementById('area').value);
area = Math.PI * radius * radius
circumference =  Math.PI * radius * 2
document.getElementById('area').textContent = area.toFixed(2)
document.getElementById('circumference').textContent = circumference.toFixed(2)
    // TODO:
    // 1. Get the radius value from the input field
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π
}
