// Add your event listener and while loop code here
// When the button is clicked, display numbers 1 to N in the output area using a while loop
let button = document.getElementbyId('countBtn');
let numberinput = document.getElementbyId('numberInput');
let output = document.getElementbyId('output');

button.addEventListener('click', () => {
    CountUp()
});

function CountUp() {
 let count = 0 ;
    let N = parseInt(numberinput.value);
    let result = '';
    while (count < N) {
        count++;
        result += count + '\n';
    }
    output.innerText = result;
}