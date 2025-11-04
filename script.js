// Select all the divs inside the parent
const images = document.querySelectorAll('#parent > div');

let draggedDiv = null;

// When dragging starts
images.forEach(div => {
  div.addEventListener('dragstart', () => {
    draggedDiv = div;
    div.classList.add('selected');
  });

  // When dragging ends
  div.addEventListener('dragend', () => {
    div.classList.remove('selected');
  });

  // Allow dropping by preventing default
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle drop event
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== div) {
      // Swap background images
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = div.style.backgroundImage;
      div.style.backgroundImage = temp;
    }
  });
});
