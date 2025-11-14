// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    
    let orderNumber = parseInt(document.getElementById('orderNumber').value);
    let quantity = parseInt(document.getElementById('quantity').value);
let totalCost = quantity * 2.45 

document.getElementById('displayOrderNumber').innerText =  orderNumber
document.getElementById('displayQuantity').innerText = quantity
document.getElementById('totalCost').innerText = totalCost.toFixed(2)
    // TODO:
    // 1. Get the order number and quantity from the input fields
    // 2. Calculate the total cost (£2.45 per bag)
    // 3. Display:
    //    - Order number
    //    - Quantity
    //    - Total cost (format to 2 decimal places)
}
