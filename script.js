//your code here
// Get all image divs
const images = document.querySelectorAll('.image');

let draggedDiv = null;

// Assign unique ids dynamically (div1, div2, etc.)
images.forEach((div, index) => {
  div.id = `div${index + 1}`;
});

// Add drag event listeners to each image div
images.forEach((div) => {
  div.addEventListener('dragstart', (e) => {
    draggedDiv = div;
    div.classList.add('selected');
  });

  div.addEventListener('dragend', (e) => {
    div.classList.remove('selected');
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow dropping
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== div) {
      // Swap background images between dragged and dropped div
      const temp = div.style.backgroundImage;
      div.style.backgroundImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = temp;
    }
  });
});
