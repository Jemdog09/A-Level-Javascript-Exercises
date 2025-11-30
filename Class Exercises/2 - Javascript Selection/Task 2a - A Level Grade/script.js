// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
let comp1 = parseInt(document.getElementById('comp1').value);
let comp2 = parseInt(document.getElementById('comp2').value);
let comp3 = parseInt(document.getElementById('comp3').value);
let comp4 = parseInt(document.getElementById('comp4').value);

let total = comp1 + comp2 + comp3 + comp4
let percentage = (total/400) * 100

if (percentage >= 80) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: A`
} else if (percentage >= 70) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: B`
} else if (percentage >= 60) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: C`
} else if (percentage >= 50) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: D`
} else if (percentage >= 40) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: E`
} else if (percentage < 40) {
    document.getElementById('result').innerText = `Percentage: ${percentage}, Grade: U`
}
    // TODO: Get the marks for all four components
    
    // TODO: Calculate the total marks
    
    // TODO: Calculate the percentage (total possible marks is 400)
    
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    
    // TODO: Display the percentage and grade
}
