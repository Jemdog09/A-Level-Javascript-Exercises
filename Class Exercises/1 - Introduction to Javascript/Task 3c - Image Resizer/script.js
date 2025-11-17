// Add event listeners to all inputs
document.getElementById('widthInput').addEventListener('input', updateImage);
document.getElementById('heightInput').addEventListener('input', updateImage);
document.getElementById('leftInput').addEventListener('input', updateImage);
document.getElementById('topInput').addEventListener('input', updateImage);

function updateImage() {
    let widthInput = document.getElementById('widthInput').value;
    let heightInput = document.getElementById('heightInput').value;
    let leftInput = document.getElementById('leftInput').value;
    let topInput = document.getElementById('topInput').value;

    document.getElementById('previewImage').style.width = widthInput + 'px';
    document.getElementById('previewImage').style.height = heightInput + 'px';
    document.getElementById('previewImage').style.left = leftInput + 'px';
    document.getElementById('previewImage').style.top = topInput + 'px';

    document.getElementById('widthValue').textContent = widthInput;
       document.getElementById('heightValue').textContent = heightInput;
          document.getElementById('leftValue').textContent = leftInput;
             document.getElementById('topValue').textContent = topInput;


    // TODO:
    // 1. Get all input values
    // 2. Update the image styles:
    //    - Width
    //    - Height
    //    - margin-left (for left/right position)
    //    - margin-top (for up/down position)
    // 3. Update the value displays with current numbers
    
    // Hint: To change styles use element.style.property = value + 'px'
    // Example: element.style.width = '200px'
}
