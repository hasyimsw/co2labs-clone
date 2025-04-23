import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap path berubah
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Komponen ini tidak render apa-apa
};

export default ScrollToTop;
