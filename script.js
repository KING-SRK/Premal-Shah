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
    const animItems = content.querySelectorAll(".acc-anim");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // close all
      items.forEach((i) => {
        i.classList.remove("active");
        const c = i.querySelector(".accordion-content");
        c.style.height = "0px";

        gsap.set(i.querySelectorAll(".acc-anim"), {
          opacity: 0,
          y: 30,
        });
      });

      if (!isOpen) {
        item.classList.add("active");
        content.style.height = content.scrollHeight + "px";

        gsap.to(animItems, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        });
      }
    });
  });

  /* 🔥 auto open first accordion */
  const firstItem = items[0];
  const firstContent = firstItem.querySelector(".accordion-content");
  const firstAnimItems = firstContent.querySelectorAll(".acc-anim");

  firstItem.classList.add("active");
  firstContent.style.height = firstContent.scrollHeight + "px";

  gsap.to(firstAnimItems, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.2,
  });
}
accordion();

function swiper() {
  new Swiper(".testimonial-swiper", {
    slidesPerView: 4, // ✅ 4 ta card
    loop: true, // infinite scroll
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}

swiper();

function animations() {
  const reveals = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // একবারই animate হবে
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  reveals.forEach((el) => observer.observe(el));
}
animations();

function pageTop() {
  const pageTop = document.querySelector(".Page-Top");

  pageTop.style.opacity = "0";
  pageTop.style.pointerEvents = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      pageTop.style.opacity = "1";
      pageTop.style.pointerEvents = "auto";
    } else {
      pageTop.style.opacity = "0";
      pageTop.style.pointerEvents = "none";
    }
  });

  pageTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

pageTop();
