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
    <div className={`${darkTheme ? darkBgStyle : lightBgStyle} relative flex flex-col min-h-screen justify-center items-center bg-no-repeat bg-contain`}>
      <div className='absolute top-11 md:top-17 flex flex-col justify-center items-center w-[328px] md:w-[540px]'>
        <div className={` flex justify-between items-baseline w-full mb-6 md:mb-8 font-bold`}>
          <h1 className={`${darkTheme ? 'text-bg-light' : 'text-bg-dark'} text-[23px]`}>devfinder</h1>
          <div className='flex items-center' onClick={handleThemeSwitcher}>
            <div className={`${darkTheme ? 'text-heading-light' : 'text-heading-dark'} text-[13px] tracking-[.2em]`}>{`${darkTheme ? 'LIGHT' : 'DARK'}`}</div>
            <div className={`${darkTheme ? styles.icon_sun : styles.icon_moon} w-[20px] h-[20px] bg-no-repeat bg-center bg-contain cursor-pointer ml-2`}></div>
          </div>
        </div>
        </div>
    </div>
  );
}
