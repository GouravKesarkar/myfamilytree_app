import React from "react";
import FamilyTree from "./components/FamilyTree";
import { familyData } from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>🌳 Our Family Tree</h1>
      </header>
      <main>
        <FamilyTree members={familyData} />
      </main>
      <footer>
        <p>Made with ❤️ by Our Family</p>
      </footer>
    </div>
  );
}
