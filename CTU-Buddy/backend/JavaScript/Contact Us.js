// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscribeModal = document.getElementById("subscribeModal");
  const closeModal = document.getElementById("closeModal");

  subscribeBtn.addEventListener("click", () => {
    console.log("Subscribe button clicked");
    subscribeModal.style.display = "block"; // Show the modal
    document.body.classList.add("modal-open"); // Add the class to blur the background
  });

  closeModal.addEventListener("click", () => {
    subscribeModal.style.display = "none"; // Hide the modal
    document.body.classList.remove("modal-open"); // Remove the class to remove the blur
  });

  window.addEventListener("click", (e) => {
    if (e.target === subscribeModal) {
      subscribeModal.style.display = "none"; // Hide the modal if clicked outside
      document.body.classList.remove("modal-open"); // Remove the class to remove the blur
    }
  });
});
