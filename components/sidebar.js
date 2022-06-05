export const Sidebar = (moduleMenu) => {
  var sideBarMenu = document.getElementById("sidebar-menu");
  moduleMenu.map((item) => {
    let newItem = document.createElement("a");
    newItem.className = "modules";
    newItem.id = item.id;
    newItem.innerHTML = item.name;
    sideBarMenu.appendChild(newItem);

    item.units.map((unit) => {
      let newUnit = document.createElement("p");
      newUnit.innerHTML = unit.name;
      sideBarMenu.appendChild(newUnit);
    });
  });
};
