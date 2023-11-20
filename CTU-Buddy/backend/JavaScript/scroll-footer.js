let lastScroll = 0;
let mouseAtBottom = false;
let footerHidden = false;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    document.querySelector('.scroll-footer').classList.remove('scroll-up');
    footerHidden = false;
    return;
  }

  if (currentScroll > lastScroll && !footerHidden && !mouseAtBottom) {
    // Scrolling down, hide the footer
    document.querySelector('.scroll-footer').classList.remove('scroll-down');
    document.querySelector('.scroll-footer').classList.add('scroll-up');
    footerHidden = true;
  } else if (currentScroll < lastScroll && footerHidden) {
    // Scrolling up, show the footer
    document.querySelector('.scroll-footer').classList.remove('scroll-up');
    document.querySelector('.scroll-footer').classList.add('scroll-down');
    footerHidden = false;
  }

  lastScroll = currentScroll;
});

window.addEventListener("mousemove", (e) => {
  if (window.innerHeight - e.clientY < 50) {
    mouseAtBottom = true;
    document.querySelector('.scroll-footer').classList.remove('scroll-down');
    document.querySelector('.scroll-footer').classList.add('scroll-up');
  } else {
    mouseAtBottom = false;
  }
});

