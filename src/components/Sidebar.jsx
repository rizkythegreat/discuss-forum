// Sidebar.jsx
import React from 'react';
import CustomLink from './CustomLink';

const Sidebar = () => {
    return (
        <div className="sticky hidden sm:block top-0 h-screen overflow-y-auto bg-gray-100 p-8 xl:w-64">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
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
                    <CustomLink variant='default' text={'Sign Out'} to={'/'} />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
