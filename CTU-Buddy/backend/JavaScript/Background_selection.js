document.addEventListener('DOMContentLoaded', function() {
  var backgroundSelector = document.getElementById('background-selector');
  var body = document.body;

  // Apply the user's selection on page load
  var background = localStorage.getItem('background');
  if (background) {
    body.className = background;
    backgroundSelector.value = background;
  }

  // Save the user's selection
  backgroundSelector.addEventListener('change', function() {
    body.className = this.value;
    localStorage.setItem('background', this.value);
  });
});
