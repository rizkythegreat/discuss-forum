// Sidebar.jsx
import React from 'react';
import { useMediaQuery } from '../utils/use-media-query';
import { Link } from 'react-router-dom';

const Sidebar = ({ authUser, signOut }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        isDesktop ? (
            <div className="sticky hidden sm:block top-0 h-screen overflow-y-auto bg-gray-100 p-8 xl:w-64">
                <div className='flex items-center mb-8'>
                    <img
                        src={authUser.avatar}
                        alt="avatar"
                        className="avatar"
                    />
                    <h1>
                        Halo {authUser.name} !
                    </h1>
                </div>
                <ul>
                    <li className="mb-2">
                        <button>Threads</button>
                    </li>
                    <li className="mb-2">
                        <button>
                            Leaderboards
                        </button>
                    </li>
                    <li className="mb-2">
                        <button onClick={signOut} className='btn-logout'>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        ) : (
            <div className='fixed inset-x-0 z-10 bottom-0 bg-gray-100 p-4'>
                <ul className='flex justify-around'>
                    <li>
                        <button>Threads</button>
                    </li>
                    <li>
                        <button>Leaderboards</button>
                    </li>
                    <li>
                        <button onClick={signOut} className='btn-logout'>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        )
    );
};

export default Sidebar;
