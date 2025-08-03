const Header = () => {
  return (
    <div className="bg-[#0d1117] text-[#58a6ff] w-screen overflow-x-hidden font-mono p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#58a6ff] via-[#79c0ff] to-[#a5f3fc] bg-clip-text text-transparent mb-2">
            SRIKANT PANDEY
          </h1>
          <div className="flex justify-center items-center space-x-2 text-[#8b949e]">
            <span className="text-[#f0883e]">{'>'}</span>
            <span className="typing-animation">Full Stack Developer</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
        <div className="text-left text-[#c9d1d9]">
          <p>Welcome to my portfolio!</p>
          <p>
            Type <span className="text-[#f0883e]">help</span> to get a list of available commands.
          </p>
          <p>
            Use <span className="text-[#f0883e]">↑</span> and <span className="text-[#f0883e]">↓</span> to navigate command history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;