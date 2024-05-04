'use client'
import { useState } from 'react';
import SideBar from './SideBar';
// import { Scrollbars } from 'react-custom-scrollbars';
import './CustomScrollbar.css';

const BukhariPage = () => {
  const [activeTab, setActiveTab] = useState('বই');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div className="flex flex-col lg:flex-row">
      {/* SideBar start............................ */}
      <div>
        <SideBar />
      </div>
      {/* end sidebar............................... */}

      {/* বই and অধ্যায় Tabs start................... */}
      <div className="bg-gray-800 max-w-full md:max-w-xs mx-auto h-96 text-center px-0 mt-2 sm:mt-4 ml-2 sm:ml-4 mr-2 py-0 rounded-md ">
        <div className="flex justify-between mb-4 border-b-2 border-gray-700 text-center">
          <button
            className={`text-lg font-semibold focus:outline-none w-full ${activeTab === 'বই' ? 'rounded-tl-md bg-green-500 p-2' : 'text-gray-600'
              }`}
            onClick={() => handleTabChange('বই')}
          >
            বই
          </button>

          <button
            className={`text-lg font-semibold focus:outline-none w-full ${activeTab === 'অধ্যায়' ? 'rounded-tr-md bg-green-500 p-2' : 'text-gray-600'
              }`}
            onClick={() => handleTabChange('অধ্যায়')}
          >
            অধ্যায়
          </button>
        </div>
        {/* Search For Filter start...... */}
        <div className=''>
          <input
            type="text"
            placeholder="Search For Filter"
            className="bg-gray-700 text-white text-center px-0 py-2 mb-6 rounded-md focus:outline-none xl:w-36 " />
        </div>
        {/* Search For Filter End...... */}

        {/* Content based on selected tab */}
        <div className="overflow-y-auto h-80">

          {/* বই Start...... */}
          {activeTab === 'বই' && (
            <div className="bg-gray rounded-lg overflow-hidden">

              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সহিহ বুখারী</h3>
                      <p className=" text-gray-700 text-left text-xs">সর্বমোট হাদিস - ৭৫৬৩</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সহিহ মুসলিম</h3>
                      <p className=" text-gray-700 text-left text-xs">সর্বমোট হাদিস - ৭৪৫৩</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সহিহ তারগিব ওয়াত তাহরিব</h3>
                      <p className=" text-gray-700 text-left text-xs">সর্বমোট হাদিস - ২০০</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">জামে' আত-তিরমিজি</h3>
                      <p className=" text-gray-700 text-left text-xs">সর্বমোট হাদিস - ৩৯৫৬</p>
                    </div>
                  </div>
                </button>
              </div>  <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সুনানে আবু দাউদ</h3>
                      <p className=" text-gray-700 text-left text-xs">সর্বমোট হাদিস - ৫২৭৪</p>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          )}
          {/* বই End..... */}

          {/* অধ্যায় start........*/}
          {activeTab === 'অধ্যায়' && (
            <div className="bg-gray rounded-lg overflow-hidden">

              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">পবিত্রতা অর্জন</h3>
                      <p className=" text-gray-700 text-left text-xs">হাদিসের রেঞ্জ: ০১ – ৩৯০</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সালাত (নামায)</h3>
                      <p className=" text-gray-700 text-left text-xs">হাদিসের রেঞ্জ: ৩৯১ – ১১৬০</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">সালাতুল ইসতিস্‌কা (বৃষ্টি প্রার্থনার সালাত)</h3>
                      <p className=" text-gray-700 text-left text-xs">হাদিসের রেঞ্জ: ১১৬১ – ১১৯৭</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">কিতাবুল জুমু’আ (জুমু’আর নামায)</h3>
                      <p className=" text-gray-700 text-left text-xs">হাদিসের রেঞ্জ: ৪৮৮-৬১৬</p>
                    </div>
                  </div>
                </button>
              </div> <div className="p-4">
                <button
                  className="w-full"
                  onClick={() => {
                    // Handle click action here
                    console.log("Clicked!");
                  }}
                >
                  <div className="">
                    <div className="rounded-md p-4 hover:bg-gray-600">
                      <h3 className="text-1xl mb-1 text-gray-400 text-left">কিতাবুল বিতর (বিতর নামায)</h3>
                      <p className=" text-gray-700 text-left text-xs">হাদিসের রেঞ্জ: ৪৫২-৪৮৭</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
          {/* অধ্যায় End........ */}
        </div>
      </div>
      {/*বই and অধ্যায় Tabs End................... */}


      {/* Bukhari Details Start.............. */}
      <div className="bg-gray-800 max-w-5xl mx-auto h-96 px-0  mt-2 sm:mt-4 ml-2 sm:ml-4 mr-2 sm:mr-6 py-0 rounded-md ">
        <div className="flex justify-between mb-4 border-b-2 border-gray-700 ">
          <button
            className={`text-lg font-semibold focus:outline-none w-full p-2 text-left text-gray-600 `}
          // onClick={() => handleTabChange('Bukhari')}
          >
            ≢ ≻Bukhari
          </button>
        </div>
        <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center'>
          <div className="flex items-center mb-4 lg:mb-0 relative left-[-30px] ml-6">
            <h4 className="text-2xl mt-4 text-gray-400 ">সহিহ বুখারী</h4>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search For Filter"
              className="bg-gray-700 mt-4 text-white px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Dummy text */}
        <div className="bg-gray rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="">
              <p className="text-gray-600 mt-4 text-xs border-b-2 border-gray-700">সংকলক : শাইখ ইমামুল হুজ্জাহ আবু ‘আবদুল্লাহ মুহাম্মাদ বিন ইসমা’ঈল বিন ইবরাহীম বিন মুগীরাহ্‌ আল বুখারী আল-জু’ফী। মোট হাদীস সংখ্যা : ৭৫৬৩ টি। প্রকাশনী : তাওহীদ পাবলিকেশন্স। মৌলিক হাদীস গ্রন্থ হিসাবে সহীহুল বুখারী গ্রন্থটি হ...আরো দেখুন</p>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto h-40">
          {/* ওহীর সূচনা অধ্যায় */}
          <div className="p-4 ">
            <button
              className="w-full flex items-center justify-between rounded-md p-4 hover:bg-gray-600 shadow-md"
              onClick={() => {
                // Handle click action here
                console.log("Clicked!");
              }}
            >
              <div>
                <h3 className="text-1xl mb-1 text-gray-400 text-left">ওহীর সূচনা অধ্যায়</h3>

              </div>
              <div className="text-gray-700 text-xs"><p className="text-gray-700 text-left text-xs">১ – ৭</p></div>
            </button>
          </div>
          {/* ঈমান */}
          <div className="p-4 ">
            <button
              className="w-full flex items-center justify-between rounded-md p-4 hover:bg-gray-600 shadow-md"
              onClick={() => {
                // Handle click action here
                console.log("Clicked!");
              }}
            >
              <div>
                <h3 className="text-1xl mb-1 text-gray-400 text-left">ঈমান</h3>
              </div>
              <div className="text-gray-700 text-xs"><p className="text-gray-700 text-left text-xs">৮ - ৫৮</p></div>
            </button>
          </div>
          {/* ইল্‌ম */}
          <div className="p-4 ">
            <button
              className="w-full flex items-center justify-between rounded-md p-4 hover:bg-gray-600 shadow-md"
              onClick={() => {
                // Handle click action here
                console.log("Clicked!");
              }}
            >
              <div>
                <h3 className="text-1xl mb-1 text-gray-400 text-left">ইল্‌ম</h3>
              </div>
              <div className="text-gray-700 text-xs"><p className="text-gray-700 text-left text-xs">৫৯ - ১৩৪</p></div>
            </button>
          </div>
          {/* ওজু */}
          <div className="p-4 ">
            <button
              className="w-full flex items-center justify-between rounded-md p-4 hover:bg-gray-600 shadow-md"
              onClick={() => {
                // Handle click action here
                console.log("Clicked!");
              }}
            >
              <div>
                <h3 className="text-1xl mb-1 text-gray-400 text-left">ওজু</h3>
              </div>
              <div className="text-gray-700 text-xs"><p className="text-gray-700 text-left text-xs">১৩৫ - ২৪৭</p></div>
            </button>
          </div>
          {/* গোসল */}
          <div className="p-4 ">
            <button
              className="w-full flex items-center justify-between rounded-md p-4 hover:bg-gray-600 shadow-md"
              onClick={() => {
                // Handle click action here
                console.log("Clicked!");
              }}
            >
              <div>
                <h3 className="text-1xl mb-1 text-gray-400 text-left">গোসল</h3>
              </div>
              <div className="text-gray-700 text-xs"><p className="text-gray-700 text-left text-xs">২৪৮ - ২৯৩</p></div>
            </button>
          </div>

        </div>
      </div>
      {/* Bukhari Details End.............. */}

    </div>
  );
};

export default BukhariPage;

