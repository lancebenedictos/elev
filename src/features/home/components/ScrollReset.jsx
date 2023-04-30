import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector(".main-container").scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollReset;
