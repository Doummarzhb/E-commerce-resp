import React from 'react';
import LightButton from  "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  }, [theme]);


  return (
    <div className='relative'>
      
      <img 
        src={LightButton} 
        alt='' 
        onClick={() => setTheme(theme === "dark" ? "light" :"dark")} 
        //        
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      
    
      <img 
        src={DarkButton} 
        alt='' 
        onClick={() => setTheme("dark")} //        
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export default DarkMode;
