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
        <div className='flex justify-between items-center w-full mb-6 font-bold'>
          <h1 className={`${darkTheme ? 'text-bg-light' : 'text-bg-dark'} text-[25px] tracking-tighter`}>devfinder</h1>
          <div className='flex items-center' onClick={handleThemeSwitcher}>
            <div className={`${darkTheme ? 'text-heading-light' : 'text-heading-dark'} text-[13px] tracking-[.2em]`}>{`${darkTheme ? 'LIGHT' : 'DARK'}`}</div>
            <div className={`${darkTheme ? styles.icon_sun : styles.icon_moon} w-[20px] h-[20px] cursor-pointer ml-2`}></div>
          </div>
        </div>
        <form className={`${darkTheme ? 'bg-container-dark' : 'bg-container-light'} flex justify-between items-center w-full rounded-2xl py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:outline-active`}>
        <div className='flex w-[220px]'>
            <svg height="24" width="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
            <input type='text' placeholder='Search GitHub username...' className={`${darkTheme ? 'placeholder:text-container-light' : 'placeholder:text-heading-dark'} w-[194px] text-[13px] tracking-[-0.01em] ml-1 focus:outline-none`}/>
          </div>
          <button className='text-white w-[88px] h-[48px] bg-active border-container-light rounded-xl'>Search</button>
        </form>
      </div>
    </div>
  );
}
