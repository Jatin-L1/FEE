
function generateRandomNumber() {
 
    const minValue = parseInt(document.getElementById("min-value").value);
    const maxValue = parseInt(document.getElementById("max-value").value);

   
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }

    if (minValue > maxValue) {
        alert("Minimum value should be less than or equal to the maximum value.");
        return;
    }

    
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

   
    document.getElementById("random-number").textContent = `Random Number: ${randomNumber}`;
}
