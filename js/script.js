// Get references to the HTML elements
const colorPicker = document.getElementById('color__picker');
const colorDisplay = document.getElementById('color__display');
const colorCode = document.getElementById('color__code');
const copyBtn = document.getElementById('copy__btn');


// Add an event listener to the color input
colorPicker.addEventListener('input', function(){
    // Get the selected color
    const selectedColor = colorPicker.value;

    // Update the background color of the display box
    colorDisplay.style.backgroundColor = selectedColor;

    // Update the hex code text
    colorCode.textContent = `Hex Code: ${selectedColor}`;

    // Enabling the copy button
    copyBtn.style.display = "block";
    copyBtn.addEventListener('click', function(){
        // Copy the hex code
        navigator.clipboard.writeText(selectedColor)
        .then(()=>{
            // Alert the copied text
            alert("Copied");
        })
        .catch(()=>{
            // Alert error message
            alert("Something went wrong");
        });
    })
})
