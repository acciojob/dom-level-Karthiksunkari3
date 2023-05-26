//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.querySelector('#level');
  let level = 1;

  if (targetElement) {
    let currentNode = targetElement;
    while (currentNode.parentNode) {
      currentNode = currentNode.parentNode;
      level++;
    }
  }

  alert(`The level of the element is: ${level}`);
});
