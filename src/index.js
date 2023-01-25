function learnMore() {
  let filmLover = prompt("Do you like independet films?");
  filmLover = filmLover.toLowerCase().trim();
  if (filmLover === "yes") {
    alert("You will love Filmin! 🎞 ");
    let allText = document.querySelector(".allText");
    allText.innerHTML =
      "<p> You should go to <a href='https://www.filmin.es'target='_blank'> FILMIN </a></p>";
    let filminImg = document.querySelector(".imagen");
    filminImg.innerHTML =
      "<img src='https://i1.wp.com/www.audiovisual451.com/wp-content/uploads/2020/12/filmin.jpg?resize=696%2C522&ssl=1' alt='filmin' width='300'/>";
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Filmin";
    let button = document.querySelector("button");
    button.innerHTML = "Change my answer";
  } else {
    alert("Keep enjoying Netflix! 🍿");
    let allText = document.querySelector(".allText");
    allText.innerHTML =
      "<p> You should go to <a href='https://www.netflix.com'target='_blank'> NETFLIX </a></p>";
    let netflixImg = document.querySelector(".imagen");
    netflixImg.innerHTML =
      "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/netflix-1647515018.jpg?resize=480:*' alt='netflix' width='300'/>";
    let h1 = document.querySelector("h1");
    h1.innerHTML = "This page is not for you";
    let h2 = document.querySelector("h2");
    h2.innerHTML = "";
    let button = document.querySelector("button");
    button.innerHTML = "Change my answer";
  }
}
let button = document.querySelector("button");
button.addEventListener("click", learnMore);
