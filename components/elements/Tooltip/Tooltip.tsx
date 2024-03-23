const Tooltip = ({ text }: { text: string }) => (
  <div className="relative before:w-7 before:h-2 before:rotate-90 before:absolute before:top-1 before:-right-7 before:bg-[url('/img/popup-arrow.svg')] before:bg-no-repeat before:bg-center">
    <span className="text-sm text-main-white">{text}</span>
  </div>
);

export default Tooltip;
