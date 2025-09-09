// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    // TODO: Get the age and hours worked from the input fields
let age = parseInt(document.getElementById('age').value);
let hours = parseInt(document.getElementById('hours').value);
let result = parseFloat(document.getElementById('result'))
    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    if (age >= 18 ) { result = hours * 6.35}
    else {result = hours * 4.85}
    // TODO: Calculate total pay
    
    // TODO: Display the hours worked and total amount earned
    document.getElementById('results').textcontent = ` Wage = ${result}`
}
