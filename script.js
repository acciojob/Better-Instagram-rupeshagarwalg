// Select all the divs inside the parent
const images = document.querySelectorAll('#parent > div');

let draggedDiv = null;

images.forEach(div => {
  // make sure draggable attribute exists (HTML already sets it, but this is safe)
  div.setAttribute('draggable', 'true');

  div.addEventListener('dragstart', (e) => {
    // remember the element being dragged
    draggedDiv = div;
    div.classList.add('selected');

    // required in many browsers to allow dropping
    try {
      e.dataTransfer.setData('text/plain', div.id || '');
      e.dataTransfer.effectAllowed = 'move';
    } catch (err) {
      // some environments might throw; safe to ignore
    }
  });

  div.addEventListener('dragend', () => {
    draggedDiv = null;
    div.classList.remove('selected');
  });

  // required so drop event is fired
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // optional: visual feedback when dragging over
  div.addEventListener('dragenter', (e) => {
    e.preventDefault();
    div.classList.add('drag-over');
  });

  div.addEventListener('dragleave', () => {
    div.classList.remove('drag-over');
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    div.classList.remove('drag-over');

    if (!draggedDiv || draggedDiv === div) return;

    // Read computed background-image values (works even if image is in CSS)
    const draggedBg = window.getComputedStyle(draggedDiv).backgroundImage;
    const targetBg = window.getComputedStyle(div).backgroundImage;

    // Swap by setting inline styles (this creates element.style.backgroundImage)
    draggedDiv.style.backgroundImage = targetBg;
    div.style.backgroundImage = draggedBg;
  });
});
