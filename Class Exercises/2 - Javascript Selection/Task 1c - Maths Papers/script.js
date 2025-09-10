// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});
{
// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let paper1 = parseInt(document.getElementById('paper1'));
    let paper2 = parseInt(document.getElementById('paper2'));
    let paper3 = parseInt(document.getElementById('paper3'));
 
    }
    // TODO: Calculate the total mark
    const result = paper1 + paper2 + paper3 
    // TODO: Check if total is greater than 160
    // TODO: Display the total mark and whether the student passed or failed
    if (result > 160 )  { 
        document.getElementById('result').textContent = `Total mark: ${result}, Pass`}
     else   
         {document.getElementById('result').textContent = `Total mark: ${result}, Fail`}
}
