// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk menghilangkan nav menu di layar kecil

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/* 
Pilihan-1, Pilihan-2 dan Pilihan-3
*/

const pilihan = document.querySelectorAll(".thumb li");
const gambar = document.getElementById("getgambar");
const displayImage = document.getElementById("displayImage");
const displayVideo = document.getElementById("displayVideo");
const displayInfo = document.getElementById("displayInfo");

pilihan.forEach((pilihan, index) => {
  pilihan.addEventListener("click", function () {
    switch (index) {
      case 0:
        displayImage.src = "img/eksperimen1.jpg";
        displayImage.style.display = "block";
        displayVideo.style.display = "none";
        displayInfo.style.display = "none";
        break;

      case 1:
        displayImage.src = "img/eksperimen2.jpg";
        displayImage.style.display = "block";
        displayVideo.style.display = "none";
        displayInfo.style.display = "none";
        break;

      case 2:
        displayImage.src = "img/eksperimen3.jpg";
        displayImage.style.display = "block";
        displayVideo.style.display = "none";
        displayInfo.style.display = "none";
        break;

      case 3:
        displayImage.style.display = "none";
        displayVideo.style.display = "block";
        displayInfo.style.display = "block";
        displayVideo.play();
        break;
    }
  });
});
