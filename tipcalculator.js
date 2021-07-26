//TODO: Add tipping function and attach to calculate button.
//Requirements:
// 1. Create a calculateTip function
//      calculateTip should consider the Bill Amount and Service Quality when making a calculation
//      Ensure Bill Amount and Service Quality are not empty before doing any calculation
//      Round to the nearest 2 decimal places
// 2. Change the button color to green and hovers blue


// Assigns calculateTip function to calculate button
document.getElementById("calculate").onclick = function() {
    calculateTip();
};