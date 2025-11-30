// Add event listeners to all inputs
document.getElementById('xPosition').addEventListener('input', updateBox);
document.getElementById('yPosition').addEventListener('input', updateBox);
document.getElementById('boxWidth').addEventListener('input', updateBox);
document.getElementById('boxHeight').addEventListener('input', updateBox);
document.getElementById('boxColor').addEventListener('input', updateBox);


function updateBox() {

    let xPosition = document.getElementById('xPosition')
    let yPosition = document.getElementById('yPosition')
    let boxWidth = document.getElementById('boxWidth')
    let boxHeight = document.getElementById('boxHeight')
    let boxColor = document.getElementById('boxColor')
    let rotation = document.getElementById('rotation')

    let boxPreview = document.getElementById('movableBox')


 boxPreview.style.left = xPosition.value + 'px';
 boxPreview.style.top = yPosition.value + 'px';
 boxPreview.style.width = boxWidth.value + 'px';
 boxPreview.style.height = boxHeight.value + 'px';
 boxPreview.style.backgroundColor = boxColor.value;
 boxPreview.style.rotate = rotation.value + 'px'

 document.getElementById('xPositionValue').textContent = xPosition.value;
 document.getElementById('yPositionValue').textContent = yPosition.value;
 document.getElementById('boxWidthValue').textContent = boxWidth.value;
 document.getElementById('boxHeightValue').textContent = boxHeight.value;
 document.getElementById('boxColorValue').textContent = boxColor.value;
 document.getElementById('rotationValue').textContent = rotation.value; 

 document.getElementById('currentX').textContent = xPosition.value
 document.getElementById('currentY').textContent = yPosition.value
  document.getElementById('currentWidth').textContent = boxWidth.value
   document.getElementById('currentHeight').textContent = boxHeight.value
    document.getElementById('currentRotation').textContent = rotation.value
     document.getElementById('currentColor').textContent = boxColor.value


    // TODO:
    // 1. Get all input values:
    //    - X position
    //    - Y position
    //    - Width
    //    - Height
    //    - Color
    // 2. Update the box styles:
    //    - left position (use X value)
    //    - top position (use Y value)
    //    - width
    //    - height
    //    - background-color
    // 3. Update the value displays
    
    // Hint: Use element.style.property = value + 'px' for dimensions
    // Example: element.style.left = '100px'
    // For color, use element.style.backgroundColor = value
}

