import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Skills } from "./sections/Skills/Skills";
import { Certifications } from "./sections/Certifications/Certifications";
import { Contact } from "./sections/Contact/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnalyticsConsent } from "./components/AnalyticsConsent";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <AnalyticsConsent />
    </>
  );
}

export default App;
