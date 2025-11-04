const boxes = document.querySelectorAll('.image');
let dragged = null;

// Add drag & drop listeners
boxes.forEach((box) => {
  box.addEventListener('dragstart', () => {
    dragged = box;
    box.classList.add('selected');
  });

  box.addEventListener('dragend', () => {
    box.classList.remove('selected');
  });

  box.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary for drop to work
  });

  box.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged && dragged !== box) {
      // Get <img> elements inside both boxes
      const draggedImg = dragged.querySelector('img');
      const targetImg = box.querySelector('img');

      // Swap their src attributes
      const temp = draggedImg.src;
      draggedImg.src = targetImg.src;
      targetImg.src = temp;
    }
  });
});
