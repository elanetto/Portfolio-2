function TooltipWrapper({ children, text }) {
  return (
    <div className="relative group inline-block cursor-pointer">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        {text}
      </div>
    </div>
  );
}

export default TooltipWrapper;
