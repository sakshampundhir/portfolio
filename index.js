const hamMenuBtn = document.querySelector(".headerMainHamMenuCont");
const smallMenu = document.querySelector(".headerSmMenu");
const headerHamMenuBtn = document.querySelector(".headerMainHamMenu");
const headerHamMenuCloseBtn = document.querySelector(
  ".headerMainHamMenuClose"
);
const headerSmallMenuLinks = document.querySelectorAll(".headerSmMenuLink");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("headerSmMenu--active")) {
    smallMenu.classList.remove("headerSmMenu--active");
  } else {
    smallMenu.classList.add("headerSmMenu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("headerSmMenu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});
