// components/Header.js
const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="flex items-center mb-4 lg:mb-0 relative left-[-45px]">
                    <button className="text-white focus:outline-none rounded-md border border-green-500 p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-green-500"
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
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">সূচিপত্র</h3>
                        <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search Hadith"
                        className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
                    />
                </div>
            </div>
        </header>        
    );
};
export default Header;
