let draggedImage = null;

document.querySelectorAll("img[draggable='true']").forEach(img => {
  img.addEventListener("dragstart", e => {
    draggedImage = e.target;
  });

  img.addEventListener("dragover", e => e.preventDefault());

  img.addEventListener("drop", e => e.preventDefault());
});

document.querySelectorAll(".image-container").forEach(container => {
  container.addEventListener("dragover", e => e.preventDefault());

  container.addEventListener("drop", e => {
    e.preventDefault();

    const targetContainer = e.currentTarget;
    const targetImage = targetContainer.querySelector("img");

    if (!draggedImage || draggedImage === targetImage) return;

    const draggedParent = draggedImage.parentNode;

    // Swap images
    targetContainer.appendChild(draggedImage);
    draggedParent.appendChild(targetImage);
  });
});