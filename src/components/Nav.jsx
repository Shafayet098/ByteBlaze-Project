import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    const [theme, setTheme] = useState('light');
    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    return (
        <div className='navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10'>
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl text-primary"><span className='text-secondary'>Byte</span>Blaze</a>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <ul className='menu hidden sm:flex menu-horizontal px-1 gap-5'>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-primary font-bold' : 'font-bold'
                        }
                        to='/'
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({isActive})=>
                            isActive? 'text-primary font-bold':'font-bold'
                        
                        }
                        to='/blogs'
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        className={({isActive})=>isActive?'text-primary font-bold':'font-bold'}
                        to='/bookmarks'
                    >
                        BookMarks
                    </NavLink>
                </ul>
                <label className="toggle text-base-content ">
                    <input onChange={handleToggle} type="checkbox" className="theme-controller w-4" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>
        </div>
    );
};

export default Nav;