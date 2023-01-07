let burguer = document.querySelector("#burguer");
let navlist = document.querySelector(".nav-list");
let navItens = document.querySelectorAll(".nav-list-item");

burguer.addEventListener("click", () => {
  console.log(burguer);

  if (navlist.classList.contains("active")) {
    navlist.classList.remove("active");
    burguer.innerHTML = "menu";

    console.log(true);
  } else {
    console.log(false);
    navlist.classList.add("active");
    burguer.innerHTML = "close";
  }
});