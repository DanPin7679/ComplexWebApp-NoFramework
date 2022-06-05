export const NavBar = (pageMenu) => {
  var navBarMenu = document.getElementById("navbar-menu");
  pageMenu.map((item) => {
    let newItem = document.createElement("a");
    newItem.className = "pages";
    newItem.id = item.id;
    newItem.innerHTML = item.name;
    navBarMenu.appendChild(newItem);
  });
};
