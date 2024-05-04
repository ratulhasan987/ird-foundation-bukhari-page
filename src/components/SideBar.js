// components/SideBar.js
import React from 'react';
const SideBar = () => {
    return (
        <div className="bg-gray-800 p-4 mt-0 flex flex-wrap md:flex-col md:flex-wrap ">        
            {/* Menu buttons */}
            <button className="text-white focus:outline-none mt-0 mb-14 ml-6 sm:ml-3">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3.293l6.646 6.647a.5.5 0 01-.708.708L10 4.707 4.062 10.64a.5.5 0 11-.708-.708L10 3.293z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M4.5 11a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-6z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button className="text-white focus:outline-none mb-14 ml-6 sm:ml-3 rounded-md bg-green-700 p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <button className="text-white focus:outline-none mb-14 ml-6 sm:ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.732 3.732a1 1 0 011.414 0l5.122 5.122a1 1 0 01.293.707V17a1 1 0 01-1 1H5a1 1 0 01-1-1V4.732a1 1 0 01.293-.707z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button className="text-white focus:outline-none mb-14 mt-2 ml-6 sm:ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 3a1 1 0 00-.707.293l-4 4a1 1 0 000 1.414l8 8a1 1 0 001.414 0l8-8a1 1 0 000-1.414l-4-4A1 1 0 0013 3V1a1 1 0 00-1-1H8a1 1 0 00-1 1v2a1 1 0 00-1 1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button className="text-white focus:outline-none mb-14 ml-6 sm:ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <rect x="6" y="4" width="25" height="25" rx="1" />
                    </svg>
                </button>
                <button className="text-white focus:outline-none mb-14 ml-6 sm:ml-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18.536 1.464a2 2 0 00-2.828 0L2.464 15.708a2 2 0 002.364 3.172l3.633-2.977a1 1 0 011.324.083l6.015 5.964a1 1 0 001.447-.004l5.96-5.963a1 1 0 01.083-1.325l-2.977-3.633a2 2 0 003.172-2.364L18.536 1.464zM7 10h1a1 1 0 110 2H7a1 1 0 110-2zm4 0h1a1 1 0 110 2h-1a1 1 0 110-2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
        </div>
    );
};

export default SideBar;

