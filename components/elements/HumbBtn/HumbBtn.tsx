const HumbBtn = () => {
  return (
    <>
      <label
        htmlFor="menu_checkbox"
        className="row-start-2 justify-self-center w-[86px] h-12 px-7 py-3 desktop:hidden block  rounded-[100px] bg-main-white cursor-pointer"
      >
        <input type="checkbox" id="menu_checkbox" className="hidden peer" />
        <div className="h-1 bg-main-medium mb-1 rounded-sm relative peer-checked:top-2 peer-checked:rotate-[45deg] transition-all"></div>
        <div className="w-3/4 h-1 bg-main-medium mb-1 rounded-sm peer-checked:w-full peer-checked:rotate-[-45deg] transition-all"></div>
        <div className="w-1/2 h-1 bg-main-medium mb-1 rounded-sm peer-checked:hidden"></div>
      </label>
    </>
  );
};

export default HumbBtn;
