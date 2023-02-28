import { useEffect } from "react";
import { getAppDirection } from "@/utils/appDirection";

const TextSlideHook = (elementId: string) => {
  const appDirection = getAppDirection();
  useEffect(() => {
    const slideText = () => {
      const element = document.getElementById(elementId);
      if (element) {
        //scroll
        element.style.paddingLeft = appDirection === "ltr" ? window.scrollY * 1.3 + "px" : '0';
        element.style.paddingRight = appDirection === "rtl" ? window.scrollY * 1.3 + "px" : '0';
        // fade 
        element.style.opacity = (1 - (window.scrollY / 600)).toString();
      }
    }

    window.addEventListener('scroll', slideText);
    return () => window.removeEventListener('scroll', slideText);
  }, [appDirection, elementId]);
}

export default TextSlideHook;