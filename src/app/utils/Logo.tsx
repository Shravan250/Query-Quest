function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-white font-bold">
        <img src="/logo.svg" alt="QueryQuest Logo" className="w-10 h-8" />
      </div>
      <span className="text-xl text-black font-semibold">QueryQuest</span>
    </div>
  );
}

export default Logo;
