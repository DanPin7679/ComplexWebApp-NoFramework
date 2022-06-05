import { MainContent } from "./components/mainContent.js";
import { NavBar } from "./components/navbar.js";
import { Sidebar } from "./components/sidebar.js";
import { fetchLearningContent } from "./fetchLearningContent.js";

const pageMenu = [
  { id: "new-path", name: "New Learning Path" },
  { id: "current-path", name: "Ongoing Learning Path" },
  { id: "library", name: "Library" },
];

const mainContent = "Main Content Placeholder";

document.body.classList.add("dark-mode");

document.getElementById("theme-btn").addEventListener("click", () => {
  console.log(document.body.classList);
  if (document.body.classList == "light-mode") {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});

NavBar(pageMenu);
MainContent(mainContent);
fetchLearningContent(Sidebar);
