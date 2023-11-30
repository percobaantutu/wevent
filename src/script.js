const menu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuSlide = document.querySelector(".menu-slide");
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  navMenu.classList.toggle("hidden");
  menuSlide.classList.add("animate__animated", "animate__slideInLeft", "fixed");
});

const dropDownSlideBtn = document.querySelector(".dropdown-slide-btn");
const dropDown = document.querySelector(".dropdown-slide");
const dropDownArrow = document.querySelector(".dropdown-arrow");
dropDownSlideBtn.addEventListener("click", function () {
  dropDown.classList.toggle("hidden");
  dropDownArrow.classList.toggle("rotate-180");
});

const dropDownSlideBtnLg = document.querySelector(".dropdown-slide-btn-lg");
const dropDownLg = document.querySelector(".dropdown-slide-lg");
const dropDownArrowLg = document.querySelector(".dropdown-arrow-lg");
dropDownSlideBtnLg.addEventListener("click", function () {
  dropDownLg.classList.toggle("hidden");
  dropDownArrowLg.classList.toggle("rotate-180");
});

// Tanggal dan waktu target
let targetDate = new Date("December 30, 2023 18:00:00").getTime();

// Memperbarui hitung mundur setiap detik
let countdown = setInterval(function () {
  // Dapatkan tanggal dan waktu saat ini
  let now = new Date().getTime();

  // Hitung selisih antara waktu target dan waktu saat ini
  let difference = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Tampilkan hasil dalam elemen HTML
  document.getElementById("#countdays").textContent = days + " days";
  document.getElementById("#counthours").textContent = hours + " hours";
  document.getElementById("#countminutes").textContent = minutes + " minutes";
  document.getElementById("#countseconds").textContent = seconds + " seconds";
  // Hentikan hitung mundur saat mencapai waktu target
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Waktu telah habis!";
  }
}, 1000);

const getTickets = document.querySelectorAll(".get-ticket");
const getTicketArrows = document.querySelectorAll(".get-ticket-arrow");

getTickets.forEach((getTicket, index) => {
  getTicket.addEventListener("mouseover", function () {
    getTicketArrows[index].classList.add("translate-x-1");
  });
  getTicket.addEventListener("mouseout", function () {
    getTicketArrows[index].classList.remove("translate-x-1");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  showSchedule(1);
});

// Fungsi untuk menampilkan jadwal dan mengubah warna tombol
function showSchedule(artistNumber) {
  // Mengatur semua tombol dan jadwal ke status awal
  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById(`artistBtn${i}`);
    const schedule = document.getElementById(`schedule${i}`);

    if (i === artistNumber) {
      // Tombol dan jadwal yang dipilih
      btn.classList.add("active");
      schedule.style.display = "block";
    } else {
      // Tombol dan jadwal yang tidak dipilih
      btn.classList.remove("active");
      schedule.style.display = "none";
    }
  }
}
