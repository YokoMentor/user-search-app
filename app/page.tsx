'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Page() {
  const darkBgStyle = 'bg-bg-dark';
  const lightBgStyle = 'bg-bg-light';
  const [darkTheme, setDarkTheme] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(true);

function handleThemeSwitcher() {
    if (themeSwitch) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
    setThemeSwitch(!themeSwitch);
  }
  
  return (
    <div className={`${darkTheme ? darkBgStyle : lightBgStyle} flex flex-col min-h-screen justify-center items-center`}>
      <div className='absolute flex flex-col justify-center items-center w-[342px] top-7'>
        <div className='flex justify-between items-center w-full mb-6 md:mb-8 font-bold'>
          <h1 className={`${darkTheme ? 'text-bg-light' : 'text-bg-dark'} text-[25px] tracking-tighter`}>devfinder</h1>
          <div className='flex items-center' onClick={handleThemeSwitcher}>
            <div className={`${darkTheme ? 'text-heading-light' : 'text-heading-dark'} text-[13px] tracking-[.2em]`}>{`${darkTheme ? 'LIGHT' : 'DARK'}`}</div>
            <div className={`${darkTheme ? styles.icon_sun : styles.icon_moon} w-[20px] h-[20px] bg-no-repeat bg-center bg-contain cursor-pointer ml-2`}></div>
          </div>
        </div>
        </div>
    </div>
  );
}
