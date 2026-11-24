const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-20 h-20 rounded-full border-4 border-white">
        <div className="absolute inset-[-4px] rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>
    </div>
  );
};

export default Loader;