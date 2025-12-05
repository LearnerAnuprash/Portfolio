const HeroSection = () => {
  return (
    <div className="absolute inset-0 z-0 ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen  object-cover opacity-60 z-0"
        src="../public/videos/nav-video.mp4"
      />
    </div>
  );
};

export default HeroSection;
