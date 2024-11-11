function toggleBox(boxNumber) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
      if (index === boxNumber - 1) {
        box.classList.toggle('expanded');
      } else {
        box.classList.remove('expanded');
      }
    });
  }
  