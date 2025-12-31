function menuToggle() {
  const menuBtn = document.querySelector(".fa-bars");
  const sideMenu = document.querySelector(".side-menu");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("fa-xmark");
  });
}

menuToggle();

function accordion() {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      items.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.height = "0px";
      });

      if (!isOpen) {
        item.classList.add("active");
        content.style.height = content.scrollHeight + "px";
      }
    });
  });

  // 🔥 auto open first item
  const firstItem = items[0];
  const firstContent = firstItem.querySelector(".accordion-content");

  firstItem.classList.add("active");
  firstContent.style.height = firstContent.scrollHeight + "px";
}
accordion();
