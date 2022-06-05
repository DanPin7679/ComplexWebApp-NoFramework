import { MainContent } from "./components/mainContent.js";
import { NavBar } from "./components/navbar.js";
import { Sidebar } from "./components/sidebar.js";

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

const mainContent = "Main Content Placeholder";

NavBar(pageMenu);
Sidebar(moduleMenu);
MainContent(mainContent);
