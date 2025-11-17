// Add event listeners to color inputs
document.getElementById('headingColor').addEventListener('input', updateColors);
document.getElementById('paragraphBg').addEventListener('input', updateColors);
document.getElementById('boxBg').addEventListener('input', updateColors);
document.getElementById('boxBorder').addEventListener('input', updateColors);

function updateColors() {
      let headingColor = document.getElementById('headingColor').value;
      let paragraphBg = document.getElementById('paragraphBg').value;
      let boxBg = document.getElementById('boxBg').value;
      let boxBorder = document.getElementById('boxBorder').value;

      document.getElementById('previewHeading').style.color = headingColor;
      document.getElementById('previewParagraph').style.backgroundColor = paragraphBg;
      document.getElementById('previewBox').style.backgroundColor = boxBg;
      document.getElementById('previewBox').style.borderColor = boxBorder;

      document.getElementById('headingColorValue').textContent = headingColor;
      document.getElementById('paragraphBgValue').textContent = paragraphBg;
      document.getElementById('boxBgValue').textContent = boxBg;
      document.getElementById('boxBorderValue').textContent = boxBorder;    
    


    // TODO:
    // 1. Get all color input values
    // 2. Update the styles of each element:
    //    - Heading text color
    //    - Paragraph background
    //    - Box background
    //    - Box border color
    // 3. Update the color value displays with the current hex codes
    
    // Hint: To change styles use element.style.property = value
    // Example: element.style.color = '#FF0000'
}
