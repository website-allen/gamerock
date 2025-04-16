/*Request frame animation start*/
  const shareIcons = document.querySelectorAll('.shareon-child');
  const overlays = document.querySelectorAll('header, nav');

  function isOverlapping(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
      r1.bottom < r2.top ||
      r1.top > r2.bottom ||
      r1.right < r2.left ||
      r1.left > r2.right
    );
  }

  function checkReflect() {
    shareIcons.forEach(icon => {
      let isCovered = false;

      overlays.forEach(overlay => {
        if (isOverlapping(icon, overlay)) {
          isCovered = true;
        }
      });

      icon.style.zIndex = isCovered ? -99 : 10;
      
    });

    // Keep checking with requestAnimationFrame
    requestAnimationFrame(checkReflect);
  }

  // Start loop
  requestAnimationFrame(checkReflect);
/*Request frame animation end*/