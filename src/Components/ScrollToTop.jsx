import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(null);

  useEffect(() => {
    if (
      prevPathnameRef.current !== pathname &&
      !pathname.includes("/FeedBack")
    ) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
      // Update the previous pathname
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  return null;
}
