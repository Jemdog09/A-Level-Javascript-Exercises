// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    let paper1 = parseInt(document.getElementById('paper1').value);
    let paper2 = parseInt(document.getElementById('paper2').value);
    let paper3 = parseInt(document.getElementById('paper3').value);

    let total = paper1 + paper2 + paper3

    if (total > 160){
        document.getElementById('result').innerText = 'Pass'

    } else {
        document.getElementById('result').innerText = 'Fail'
    }
    // TODO: Get the marks for all three papers
    
    // TODO: Calculate the total mark
    
    // TODO: Check if total is greater than 160
    
    // TODO: Display the total mark and whether the student passed or failed
}
