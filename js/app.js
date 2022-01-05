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
