import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../auth-context/AuthProvider';

const Navbar = () => {
    const link = <>
        <NavLink to='/' className={'font-semibold'}>Home</NavLink>
        <NavLink to={'myPostedJobs/'} className={'font-semibold'}>My Posted Jobs</NavLink>
        <NavLink className={'font-semibold'}>Users</NavLink>
        <NavLink to='register' className={'font-semibold'}>Sign Up</NavLink>
        <NavLink to='login/' className={'font-semibold'}>Sign In</NavLink>
        <NavLink to='addJobs/' className={'font-semibold'}>Add jobs</NavLink>
        <NavLink to='myApplication/' className={'font-semibold'}>My Applications</NavLink>
    </>

    const { user, userSignOut } = useContext(AuthContext)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                console.log('signOut successful');
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <button onClick={handleSignOut} className='btn'>Lockout</button>
                        </div>
                        :
                        <Link to={'/login'} className='btn'>SignIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;