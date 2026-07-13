import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Social />
      </main>

      <Footer />
    </div>
  );
}

export default App;
