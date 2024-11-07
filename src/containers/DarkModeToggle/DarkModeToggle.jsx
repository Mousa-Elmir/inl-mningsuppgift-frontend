import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeSwitch = document.getElementById("darkModeSwitch");

   
    const handleToggle = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("dark-theme");
    };

    if (darkModeSwitch) {
      darkModeSwitch.addEventListener("click", handleToggle);
    }

    return () => {
      if (darkModeSwitch) {
        darkModeSwitch.removeEventListener("click", handleToggle);
      }
    };
  }, [darkMode]);

  return ( 
    <button id="darkModeSwitch" className="dark-mode-toggle">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
