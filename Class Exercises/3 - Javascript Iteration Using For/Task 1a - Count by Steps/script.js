// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    let output = document.getElementById('sequenceOutput').innerHTML = '';
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    if (isNaN(start) || isNaN(end) || isNaN(step)) {
       
    document.getElementById(output).textContent = "Please enter valid numbers"
    };
    // Check if step is positive
    if (step < 0) { document.getElementById(output).textContent = "Please enter a positive number"}
    // Check if end is greater than start
    if (end < start) {
         document.getElementById(output).textContent = "Please enter valid numbers"
        };
    // TODO: Create array to store sequence
    let sequenceOutput = [];  
    // TODO: Use for loop with step to generate sequence
for (let i = start; i <= end; step++) {
    sequenceOutput.push(i);
}


    // Remember to use the step in the for loop increment
    
    // TODO: Display the sequence
    document.getElementById('sequenceOutput').innerHTML = sequenceOutput.join('→');
    // Join the numbers with arrows between them
}

// Initialize the page

window.onload = function() {

    generateSequence();
};
