function Spinner() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[6rem] h-[6rem] rounded-full bg-gradient-conic to-transparent via-color-light-2 mask bg-radial bg-cover animate-spin"></div>
    </div>
  );
}

export default Spinner;
