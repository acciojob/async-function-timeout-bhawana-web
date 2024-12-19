//your JS cod// Function to introduce a delay using a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission and display the message
async function handleSubmit() {
    const textInput = document.getElementById("text").value;  // Get text from input
    const delayInput = document.getElementById("delay").value;  // Get delay from input

    // Check if the delay is a valid number
    if (textInput.trim() === "" || delayInput === "" || isNaN(delayInput) || delayInput <= 0) {
        alert("Please provide valid text and a positive number for delay.");
        return;
    }

    const delayMs = parseInt(delayInput);  // Convert delay to number

    // Introduce the delay and display the text
    await delay(delayMs);  // Wait for the specified delay
    document.getElementById("output").innerText = textInput;  // Show the text after the delay
}

// Attach the handleSubmit function to the button click event
document.getElementById("btn").addEventListener("click", handleSubmit);
e here. If required.
