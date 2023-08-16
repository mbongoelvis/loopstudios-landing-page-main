const openmenu = () => {
  const mobilemenu = document.querySelector(".popmenu");
  const Menu = document.querySelector(".menu");
  Menu.addEventListener("click", (e) => {
    if (mobilemenu.classList.contains("scale-0")) {
      mobilemenu.classList.remove("scale-0");
    }
  });
};
// close menu
const closemenu = () => {
  const mobilemenu = document.querySelector(".popmenu");
  const closemenu = document.querySelector(".menuclose");
  closemenu.addEventListener("click", (e) => {
    if (!mobilemenu.classList.contains("scale-0")) {
      mobilemenu.classList.add("scale-0");
    }
  });
};
