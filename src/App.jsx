import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/AboutMe";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed background solution */}
      <div
        id="home"
        className="relative min-h-[600px] overflow-hidden bg-gray-900 sm:min-h-[700px]"
      >
        {/* Animated grid background (tech vibe) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Content */}
        <div className="relative">
          <Navbar />
          <div id="home">
            <Hero />
          </div>
          <About />
          <div id="projects">{/* Projects */}</div>
          <div id="skills">{/* Skills */}</div>
          <div id="contact">{/* Contact */}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
