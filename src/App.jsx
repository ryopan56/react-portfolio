import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <div className="max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-slate-900">React Portfolio</h1>

        <p className="mt-4 text-slate-600">
          React と Tailwind CSS の開発環境を準備できました。
        </p>

        <button className="mt-6 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white">
          Tailwind テスト
        </button>
      </div>
    </main>
  );
}

export default App;
