//your JS cod// Function to introduce a delay using a promise
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

// Function to create a promise that resolves after the given delay
function getData(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

// Async function to handle the click event and display the output
async function fetchData(event) {
  event.preventDefault(); // Prevent form submission default behavior

  // Clear the output div
  outputDiv.textContent = '';

  try {
    const text = textInput.value; // Get the text from input
    const delay = parseInt(delayInput.value, 10); // Parse the delay input as an integer

    // Validate inputs
    if (text && delay) {
      const data = await getData(text, delay); // Wait for the promise to resolve
      outputDiv.textContent = data; // Display the resolved value
    } else {
      outputDiv.textContent = 'Please enter valid text and delay.';
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Attach event listener to the button
btn.addEventListener('click', fetchData);