// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', checkNumber);
});

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    let number = parseInt(document.getElementById('number').value);

    if (number > 0) {
        document.getElementById('result').innerText = 'POSITIVE'
    } else if (number < 0){
        document.getElementById('result').innerText = 'NEGATIVE'
    } else {
        document.getElementById('result').innerText = 'ZERO'
    }
    // TODO: Get the number from the input field
    
    // TODO: Check if the number is positive, negative, or zero
    
    // TODO: Display the appropriate message (POSITIVE, NEGATIVE, or ZERO)
}
