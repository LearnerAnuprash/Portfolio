interface NavLinkProps {
  // Typesafety for href and label must be of type string
  href: string;
  label: string;
}

const Navigation = () => {
  return (
    <div className="min-h-50px flex items-start justify-center pt-4">
      <nav className="flex justify-center">
        <ul className=" relative flex justify-center gap-8 bg-white/5 backdrop-blur-lg p-4 rounded-3xl border border-white/30 shadow-xl z-20">
          {/* Video layer with absolute position inside the ul tag */}
          <div className="absolute inset-0 z-0 ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 rounded-3xl"
              src="../public/videos/nav-video.mp4"
            />
          </div>

          {/* Glass Blur layer - on top of video */}
          <div className="absolute inset-0 z-[1] bg-black/10 backdrop-blur-lg rounded-3xl"></div>

          {/* 4. The Links - on top of everything (z-20) */}
          <div className="flex justify-center gap-8 z-20">
            <NavLink href="#" label="Home" />
            <NavLink href="#" label="My Works" />
            <NavLink href="#" label="Blog" />
            <NavLink href="#" label="Contact Me" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

//Cleaner code
const NavLink = ({ href, label }: NavLinkProps) => (
  <a
    href={href}
    className="text-white font-medium hover:text-white/80 transition-all duration-200 hover:scale-105"
  >
    <li>{label}</li>
  </a>
);

export default Navigation;
