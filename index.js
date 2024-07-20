const hamMenuBtn = document.querySelector(".headerMainHamMenuCont");
const smallMenu = document.querySelector(".headerSmMenu");
const headerHamMenuBtn = document.querySelector(".headerMainHamMenu");
const headerHamMenuCloseBtn = document.querySelector(".headerMainHamMenuClose");
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

const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

function sendEmail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
  }

  const subject = encodeURIComponent(`New message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  const mailtoLink = `mailto:sakshampundhir.05@gmail.com?subject=${subject}&body=${body}`;

  // Attempt to open the mail client
  window.location.href = mailtoLink;

  // Prevent form submission
  return false;
}
