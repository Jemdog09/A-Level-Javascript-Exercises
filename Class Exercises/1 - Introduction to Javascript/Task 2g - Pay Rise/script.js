// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePayRise);

function calculatePayRise() {

    let currentSalary = parseFloat(document.getElementById('currentSalary').value);
    let months = parseInt(document.getElementById('months').value);
    let percentage = parseFloat(document.getElementById('percentage').value);

    let newSalary = currentSalary * (1 + (percentage/100))
    let backPay = (currentSalary/12) * months
    document.getElementById('newSalary').innerText = newSalary.toFixed(2)
    document.getElementById('backPay').innerText = backPay.toFixed(2)
    // TODO:
    // 1. Get the current salary, months back dated, and pay rise percentage
    // 2. Calculate:
    //    - New annual salary (current salary + percentage increase)
    //    - Back pay (difference in monthly salary × number of months)
    // 3. Display both results formatted to 2 decimal places
}
