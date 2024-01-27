function togglerMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  document.querySelector("#nav-menu").classList.toggle("top-[69px]");
}
