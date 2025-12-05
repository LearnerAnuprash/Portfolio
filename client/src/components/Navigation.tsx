const Navigation = () => {
  return (
    <div className="min-h-50px flex items-start justify-center pt-4">
      <nav className="flex justify-center">
        <ul className="flex justify-center gap-8 bg-white/5 backdrop-blur-lg p-4 rounded-3xl border border-white/30 shadow-xl">
          <a
            href="#"
            className="text-white font-medium hover:text-white/80 transition-all duration-200 hover:scale-105"
          >
            <li>Home</li>
          </a>
          <a
            href="#"
            className="text-white font-medium hover:text-white/80 transition-all duration-200 hover:scale-105"
          >
            <li>My Works</li>
          </a>
          <a
            href="#"
            className="text-white font-medium hover:text-white/80 transition-all duration-200 hover:scale-105"
          >
            <li>Blog</li>
          </a>
          <a
            href="#"
            className="text-white font-medium hover:text-white/80 transition-all duration-200 hover:scale-105"
          >
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
