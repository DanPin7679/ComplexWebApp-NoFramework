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

NavBar(pageMenu);
MainContent(mainContent);
fetchLearningContent(Sidebar);
