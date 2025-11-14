// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHireCharge);

function calculateHireCharge() {
    let miles = parseFloat(document.getElementById('miles').value);
   let mileageCharge = 0.05 * miles
  let  totalCharge = 25.00 + mileageCharge 
    document.getElementById('mileageCharge').innerText = mileageCharge.toFixed(2)
    document.getElementById('totalCharge').innerText = totalCharge.toFixed(2)
    // TODO:
    // 1. Get the miles travelled from the input field
    // 2. Calculate:
    //    - Mileage charge (5p per mile = £0.05 per mile)
    //    - Total charge (£25.00 + mileage charge)
    // 3. Display both charges formatted to 2 decimal places
}
