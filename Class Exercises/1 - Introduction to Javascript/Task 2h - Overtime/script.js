// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePay);

function calculatePay() {
    let standardRate = parseInt(document.getElementById('standardRate').value);
    let overtimeRate = parseInt(document.getElementById('overtimeRate').value);
    let basicHours = parseInt(document.getElementById('basicHours').value);
     let overtimeHours = parseInt(document.getElementById('overtimeHours').value);

     let basicPay = standardRate * basicHours
     let overtimePay = overtimeRate * overtimeHours
     let totalPay = basicPay + overtimePay

     document.getElementById('basicPay').innerText = basicPay.toFixed(2)
     document.getElementById('overtimePay').innerText = overtimePay.toFixed(2)
     document.getElementById('totalPay').innerText = totalPay.toFixed(2)
     

    // TODO:
    // 1. Get all input values:
    //    - Standard hourly rate
    //    - Overtime rate
    //    - Basic hours worked
    //    - Overtime hours worked
    // 2. Calculate:
    //    - Basic pay (standard rate × basic hours)
    //    - Overtime pay (overtime rate × overtime hours)
    //    - Total pay (basic pay + overtime pay)
    // 3. Display all amounts formatted to 2 decimal places
}
