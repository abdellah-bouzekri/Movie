import React, { useEffect, useState } from "react";

export default function BackToTopButon() {
  const [BackToTopButon, setBackToTopButon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButon(true);
      } else {
        setBackToTopButon(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {BackToTopButon && (
        <button
          onClick={scrollUp}
          className="fixed bottom-12 right-4 h-12 w-12 rounded-full bg-blue-400 text-white font-bold hover:bg-blue-900 focus:outline-none">
          &#9650;
        </button>
      )}
    </div>
  );
}
