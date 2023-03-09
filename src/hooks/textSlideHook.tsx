import { useEffect } from "react";
import { getAppDirection } from "@/utils/appDirection";

const TextSlideHook = (elementId: string) => {
  const appDirection = getAppDirection();
  useEffect(() => {
    const slideText = () => {
      const element = document.getElementById(elementId);
      if (element) {
        //scroll to side
        // element.style.paddingLeft = appDirection === "ltr" ? window.scrollY * 1.3 + "px" : '0';
        // element.style.paddingRight = appDirection === "rtl" ? window.scrollY * 1.3 + "px" : '0';
        
        // scroll down
        // rpound the number
        const windowPosition = Math.round((window.scrollY));
        const screenHeight = Math.round((window.innerHeight));
        const elementPosition = Math.round((element.getBoundingClientRect().top));
        console.log("screenHeight", screenHeight);
        console.log(windowPosition);
        element.style.paddingTop = (windowPosition - 300) * 1.3 + "px";

        console.log("elementPosition", elementPosition);
        console.log("windowPosition", windowPosition - screenHeight - 800);
        // check if element is double the old position
        if (elementPosition < (windowPosition - screenHeight - 800)) {
          // slide to the side 
          element.style.paddingLeft = appDirection === "ltr" ? (windowPosition) * 1.3 + "px" : '0';
          element.style.paddingRight = appDirection === "rtl" ? (windowPosition) * 1.3 + "px" : '0';
        }
        // fade 
        //element.style.opacity = (1 - (window.scrollY / 600)).toString();
      }
    }

    window.addEventListener('scroll', slideText);
    return () => window.removeEventListener('scroll', slideText);
  }, [appDirection, elementId]);
}

export default TextSlideHook;