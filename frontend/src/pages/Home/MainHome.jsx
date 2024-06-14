import React from 'react'
import LogoutButton from '../../components/Chat-app/sidebar/LogoutButton'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuthContext } from '../../components/Chat-app/context/AuthContext'

import Footer from './footer'

function MainHome() {

    let { authUser } = useAuthContext()

    return (
        <div className=" opacity-90">
            <div className="navbar bg-gray-600">
                <div className="navbar-start">
                    <div>
                        <img src="https://images-platform.99static.com/vIu2cVD9lXmrteegKGg6WzoCRi0=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/147/147971/attachment_147971173" alt="" className='h-12'/>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/chat'>{authUser.userType === "client" ? <a>Talk to lawyer</a> : <a>Talk to client</a>}</NavLink></li>
                            <li>
                                <details>
                                <summary>Articles and Sections</summary>
                                <ul className="p-2">
                                    <li><Link to='/get'><a>Articles</a></Link></li>
                                    <li><Link to='/ipc'><a>IPC</a></Link></li>
                                    <li><Link to='cpc'><a>CPC</a></Link></li>
                                    <li><Link to='/crpc'><a>CRPC</a></Link></li>
                                    <li><Link to='/marriage'><a>Marriage</a></Link></li>
                                    <li><Link to='/motorV'><a>Motor Vehicle</a></Link></li>

                                </ul>
                                </details>
                            </li>
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="navbar-center relative z-10 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/chat'>{authUser.userType === "client" ? <a>Talk to lawyer</a> : <a>Talk to client</a>}</NavLink></li>
                        <li>
                            <details>
                                <summary>Articles and Sections</summary>
                                <ul className="p-2">
                                    <li><Link to='/get'><a>Articles</a></Link></li>
                                    <li><Link to='/ipc'><a>IPC</a></Link></li>
                                    <li><Link to='cpc'><a>CPC</a></Link></li>
                                    <li><Link to='/crpc'><a>CRPC</a></Link></li>
                                    <li><Link to='/marriage'><a>Marriage</a></Link></li>
                                    <li><Link to='/motorV'><a>Motor Vehicle</a></Link></li>
                                </ul>
                            </details>
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <LogoutButton />
                </div>
            </div>
            <div className="min-h-screen">
            
            <Outlet >
                
            </Outlet>
            </div>
        <Footer></Footer>
        </div>
    

    )
}

export default MainHome