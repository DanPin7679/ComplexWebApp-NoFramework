export const MainContent = (content) => {
  var mainContent = document.getElementById("main-content");

  let newItem = document.createElement("h1");
  newItem.innerHTML = content;
  mainContent.appendChild(newItem);
};
