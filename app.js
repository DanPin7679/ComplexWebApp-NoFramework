const pageMenu = [
  { id: "new-path", name: "New Learning Path" },
  { id: "current-path", name: "Ongoing Learning Path" },
  { id: "library", name: "Library" },
];

const moduleMenu = [
  { id: "module-1", name: "Module 1" },
  { id: "module-2", name: "Module 2" },
  { id: "module-3", name: "Module 3" },
];

var navBarMenu = document.getElementById("navbar-menu");
pageMenu.map((item) => {
  let newItem = document.createElement("a");
  newItem.className = "pages";
  newItem.id = item.id;
  newItem.innerHTML = item.name;
  navBarMenu.appendChild(newItem);
});

var sideBarMenu = document.getElementById("sidebar-menu");
moduleMenu.map((item) => {
  let newItem = document.createElement("a");
  newItem.className = "modules";
  newItem.id = item.id;
  newItem.innerHTML = item.name;
  sideBarMenu.appendChild(newItem);
});
