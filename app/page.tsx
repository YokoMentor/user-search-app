'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Page() {
const [darkTheme, setDarkTheme] = useState(true);
const [themeSwitch, setThemeSwitch] = useState(true);

const containerStyle = `${darkTheme ? 'bg-container-dark' : `${styles.shadow && 'bg-container-light'}`}`;
const userInfoTitle = `${darkTheme ? 'text-container-light' : 'text-heading-dark'} text-[13px]`;
const userInfo = `${darkTheme ? 'text-container-light' : 'text-username-dark'} font-bold text-[22px] mb-4`;
const profileInfo = `${darkTheme ? 'text-container-light' : 'text-heading-dark'} tracking-tighter`;

function handleThemeSwitcher() {
    if (themeSwitch) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
    setThemeSwitch(!themeSwitch);
  }
  
  return (
    <div className={`${darkTheme ? 'bg-bg-dark' : 'bg-bg-light'} flex flex-col min-h-screen justify-center items-center`}>
      <div className='absolute flex flex-col justify-center items-center w-[342px] top-7'>
        <div className='flex justify-between items-center w-full mb-6 font-bold'>
          <h1 className={`${darkTheme ? 'text-bg-light' : 'text-bg-dark'} text-[25px] tracking-tighter`}>devfinder</h1>
          <button className='flex items-center rounded-md focus:outline-2 focus:outline-active focus:outline-offset-3 cursor-pointer' onClick={handleThemeSwitcher}>
            <div className={`${darkTheme ? 'text-heading-light' : 'text-heading-dark'} text-[13px] tracking-[.2em]`}>{`${darkTheme ? 'LIGHT' : 'DARK'}`}</div>
            <div className={`${darkTheme ? styles.icon_sun : styles.icon_moon} w-[20px] h-[20px] ml-2`}></div>
          </button>
        </div>
        <form className={`${containerStyle} flex justify-between items-center w-full rounded-2xl py-2.5 px-3 focus-within:outline focus-within:outline-2 focus-within:outline-active`}>
        <div className='flex w-[220px]'>
            <svg height="24" width="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
            <input type='text' placeholder='Search GitHub username...' className={`${darkTheme ? 'placeholder:text-container-light' : 'placeholder:text-heading-dark'} w-[194px] text-[13px] tracking-[-0.01em] ml-1 focus:outline-none`}/>
          </div>
          <button className='text-white w-[88px] h-[48px] bg-active border-container-light rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-active cursor-pointer'>Search</button>
        </form>
        <div className={`${containerStyle} flex flex-col items-center w-full rounded-2xl mt-8`}>
          <div className='flex flex-col w-full mt-8'>
            <div className='flex justify-between'>
              <div className={`${styles.avatar} w-[70px] h-[70px] bg-no-repeat bg-center bg-contain ml-6`}></div>
              <div className='flex flex-col'>
                <div className='flex flex-col mt-1'>
                  <h1 className={`${darkTheme ? 'text-container-light' : 'text-username-dark'} text-[26px] font-bold leading-none mr-13`}>The Octocat</h1>
                  <p className='text-active mt-1'>@octocat</p>
                </div>
                <div className={`${profileInfo} mt-1`}>Joined 25 Jan 2011</div>
              </div>
            </div>
          <div className={`${profileInfo} opacity-75 ml-6 mt-6`}>This profile has no bio</div>
          </div>
          <div className={`${darkTheme ? 'bg-bg-dark' : 'bg-bg-light'} flex flex-col items-start w-[295px] rounded-xl px-5 py-4 mt-6 mb-8`}>
            <div className={userInfoTitle}>Repos</div>
            <div className={userInfo}>8</div>
            <div className={userInfoTitle}>Followers</div>
            <div className={userInfo}>3938</div>
            <div className={userInfoTitle}>Following</div>
            <div className={userInfo}>9</div>
          </div>
        </div>
      </div>
    </div>
  );
}
