// Add event listeners to all controls
document.getElementById('fontSize').addEventListener('input', updateStyles);
document.getElementById('fontFamily').addEventListener('change', updateStyles);
document.getElementById('alignLeft').addEventListener('click', () => updateAlignment('left'));
document.getElementById('alignCenter').addEventListener('click', () => updateAlignment('center'));
document.getElementById('alignRight').addEventListener('click', () => updateAlignment('right'));
document.getElementById('boldText').addEventListener('change', updateStyles);
document.getElementById('italicText').addEventListener('change', updateStyles);

function updateAlignment(alignment) {


    // TODO:
    // 1. Update the text alignment of the preview text
    // 2. Update the current alignment display
  let previewText = document.getElementById('previewText');
    previewText.style.textAlign = alignment;
    document.getElementById('currentAlignment').textContent = alignment.charAt(0).toUpperCase() + alignment.slice(1);

    

}

function updateStyles() {

    let fontSize = document.getElementById('fontSize').value;
    let fontFamily = document.getElementById('fontFamily').value;
    let isBold = document.getElementById('boldText').checked;
    let isItalic = document.getElementById('italicText').checked;

    let previewText = document.getElementById('previewText');
    previewText.style.fontSize = fontSize + 'px';
    previewText.style.fontFamily = fontFamily;
    previewText.style.fontWeight = isBold ? 'bold' : 'normal';
    previewText.style.fontStyle = isItalic ? 'italic' : 'normal';

    document.getElementById('currentFontSize').textContent = fontSize + 'px';
    document.getElementById('currentFontFamily').textContent = fontFamily;
    document.getElementById('currentBold').textContent = isBold ? 'Yes' : 'No';
    document.getElementById('currentItalic').textContent = isItalic ? 'Yes' : 'No';

 

    // TODO:
    // 1. Get all style values:
    //    - Font size from number input
    //    - Font family from select
    //    - Bold and italic from checkboxes
    // 2. Update the preview text styles
    // 3. Update the current styles display
    
    // Hint: For bold/italic, use element.style.fontWeight = 'bold' or 'normal'
    // and element.style.fontStyle = 'italic' or 'normal'
}
