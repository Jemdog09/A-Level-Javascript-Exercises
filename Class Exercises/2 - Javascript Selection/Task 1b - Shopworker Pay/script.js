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
    let hours = parseFloat(document.getElementById('hours').value);

    if (age < 18){
        let pay = 4.35 * hours
        
    document.getElementById('result').innerText = `Hours worked: ${hours}, Payment: £${pay.toFixed(2)}`
    } else {
        let pay = 6.35* hours
        
    document.getElementById('result').innerText = `Hours worked: ${hours}, Payment: £${pay.toFixed(2)}`
    }

    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    
    // TODO: Calculate total pay
    
    // TODO: Display the hours worked and total amount earned
}
