export const Sidebar = (moduleMenu) => {
  const sideBarMenu = document.getElementById("sidebar-menu");

  moduleMenu.map((item) => {
    let newItem = document.createElement("a");
    newItem.className = "sidebar-menu-main";
    newItem.id = item.id;
    newItem.innerHTML = item.name;
    sideBarMenu.appendChild(newItem);

    item.units.map((unit) => {
      let newUnit = document.createElement("a");
      newUnit.className = "sidebar-menu-sub";
      newUnit.id = unit.id;
      newUnit.innerHTML = unit.name;
      sideBarMenu.appendChild(newUnit);
    });
  });
};
