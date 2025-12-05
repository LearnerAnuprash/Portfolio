import HeroSection from "./components/HeroSection.tsx";
import Navigation from "./components/Navigation.tsx";
import { DiGithubFull } from "react-icons/di";

const App = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-20 h-12"></div>
        {/* Empty div to center the navigation bar */}
        <Navigation />
        <div className="text-white text-5xl px-2 border hover:text-blue-300 border-white duration-400 hover:border-blue-500 rounded-2xl transition-colors">
          <a href="https://github.com/LearnerAnuprash/Portfolio">
            <DiGithubFull />
          </a>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default App;
