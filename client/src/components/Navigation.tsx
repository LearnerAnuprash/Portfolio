const Navigation = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-center gap-20 mt-2 bg-purple-200 p-5 w-fit rounded-2xl ">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>My Works</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Contact Me</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
