import "./App.css";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";



function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}

export default App;
