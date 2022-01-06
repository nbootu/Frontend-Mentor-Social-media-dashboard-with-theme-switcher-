'use strict';

/* Switch theme */
// Get Switch
const switcher = document.querySelector('.theme-switcher input');
// Get root
const doc = document.firstElementChild;

// Check for user prefrence
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  switcher.checked = false;
} else {
  switcher.checked = true;
}

// Listen to change on input
switcher.addEventListener('input', (e) => {
  // Check if switch is on
  const checked = e.target.checked;

  if (!checked) {
    // Switch is off -> dark mode
    doc.setAttribute('color-scheme', 'dark');
  } else {
    // Switch is on -> light mode
    doc.setAttribute('color-scheme', 'light');
  }
});

/* Background pattern */
const setBgPattern = () => {
  // Get main grid and pattern element
  const mainGrid = document.querySelector('main');
  const bgPattern = document.querySelector('.bg-pattern');

  // Get distance to top
  const gridHalfHeight = mainGrid.getBoundingClientRect().height / 2;
  const gridDistanceTop = mainGrid.getBoundingClientRect().top;
  const topOffset = gridHalfHeight + gridDistanceTop;

  // Set position of pattern element
  if (window.matchMedia('(min-width: 768px)').matches) {
    bgPattern.style.blockSize = `${topOffset}px`;
  } else {
    bgPattern.style.blockSize = 0;
  }
};

// Listen to resize event
window.addEventListener('resize', setBgPattern);

// Run function onLoad
setBgPattern();
