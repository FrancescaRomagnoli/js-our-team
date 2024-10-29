console.log("JS OK");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// #

const cardContainer = document.getElementById("card-row");

let cardHtml = ``;

function cardHtmlGenerator(name, role, img) {
  return;
  `<div class="card d-flex">
  <div>
    <img src="./img/female1.png" class="card-img" alt="" />
  </div>
  <div class="card-text">
    <div class="card-name">name</div>
    <div class="card-role">role</div>
    <div class="card-contact">mail</div>
  </div>
</div>`;
}
