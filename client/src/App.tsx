import HeroSection from "./components/HeroSection.tsx";
import MyName from "./components/MyName.tsx";
import Navigation from "./components/Navigation.tsx";
import { DiGithubFull } from "react-icons/di";

const App = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="w-20 h-12"></div>
        {/* Empty div to center the navigation bar */}
        <Navigation />
        <div
          className="text-white text-5xl px-2 mr-2.5 border border-white/30 rounded-2xl transition-all duration-400 z-20 
        hover:text-blue-200 
    hover:border-green-700
    hover:shadow-2xl hover:shadow-cyan-400/50
    hover:scale-110 hover:-rotate-3"
        >
          <a href="https://github.com/LearnerAnuprash/Portfolio">
            <DiGithubFull />
          </a>
        </div>
      </div>
      <MyName />
      <HeroSection />
    </div>
  );
};

export default App;
