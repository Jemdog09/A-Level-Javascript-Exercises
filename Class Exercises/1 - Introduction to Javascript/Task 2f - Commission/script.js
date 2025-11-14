// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    let invoice1 = parseFloat(document.getElementById('invoice1').value);
    let amount1 = parseFloat(document.getElementById('amount1').value);
    let invoice2 = parseFloat(document.getElementById('invoice2').value);
    let amount2 = parseFloat(document.getElementById('amount2').value);
    let invoice3 = parseFloat(document.getElementById('invoice3').value);
    let amount3 = parseFloat(document.getElementById('amount3').value);    

let totalSales = amount1 + amount2 + amount3 
let commission = totalSales * 20 / 100 

document.getElementById('salesDetails').innerText = `Sales Details: Invoice 1 - ${invoice1}, Invoice 2 - ${invoice2}, Invoice 3 - ${invoice3}`
document.getElementById('totalSales').innerText = totalSales.toFixed(2)
document.getElementById('commission').innerText = commission.toFixed(2)

    // 1. Get all invoice numbers and amounts from the input fields
    // 2. Calculate:
    //    - Total sales amount
    //    - Commission (20% of total sales)
    // 3. Display:
    //    - Each sale's details
    //    - Total sales amount
    //    - Commission earned
    // Note: Format all monetary values to 2 decimal places
}
