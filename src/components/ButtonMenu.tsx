"use client";

const ButtonMenu = () => {
  return (
    <button
      onClick={() => {
        const catalogElement = document.getElementById("catalog");
        if (catalogElement) {
          catalogElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
      className="h-[56px] max-w-[224px] rounded-[10px] border border-[#E7A013] bg-white font-bold text-[#CF8E0B] transition-colors max-mobile:max-w-full [@media(any-hover:hover){&:hover}]:bg-[#E7A013] [@media(any-hover:hover){&:hover}]:text-[#363636]"
    >
      Перейти к меню
    </button>
  );
};

export { ButtonMenu };
