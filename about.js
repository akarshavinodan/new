document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach((element) => {
    const delay = parseInt(element.getAttribute("data-delay"), 10);

    setTimeout(() => {
      element.classList.add("active");
    }, delay * 1500); 
  });
});
