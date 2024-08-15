import React, { useState } from 'react';
import Logo from './Assets/logo (1).png';
import Banner1 from './Assets/banner.png';
import Grid1 from './Assets/Path 7.png'
import Gird2 from './Assets/Group 4.png'
import Grid3 from './Assets/Group 6.png'
import Grid4 from './Assets/Group 8.png'
import AboutusBnner from './Assets/Group 163.png'
import CamelPic from './Assets/camel.png'
import DubaiPic from './Assets/dubai.png'
import ImageSlider from './ImageSlider';
import SlideImage1 from './Assets/difc_2.png'
import SlideImage2 from './Assets/houses.png'
import SlideImage3 from './Assets/building.png'
import SlideImage4 from './Assets/fullbuilding.png'
import SlideImage5 from './Assets/manlooking'
import SlideImage6 from './Assets/cityimage'



const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const images = [SlideImage1,SlideImage2,SlideImage3,SlideImage4,SlideImage5,SlideImage6]

    return (
        <div className='box-border p-0 m-0 relative font-outfit'>
            <nav className='bg-transparent border-white border-b-[0.01px] flex items-center h-20 absolute top-0 left-0 right-0 z-10 px-4'>
                <div className='flex items-center'>
                    <img className='w-[55%] h-auto' src={Logo} alt="Logo" />
                </div>
                <div className='flex-1 flex justify-center pr-[250px]'>
                    <ul className='hidden md:flex space-x-4'>
                        <li><a href='#' className='text-white hover:underline'>Home</a></li>
                        <li><a href='#' className='text-white hover:underline'>About Us</a></li>
                        <li><a href='#' className='text-white hover:underline'>Products</a></li>
                        <li><a href='#' className='text-white hover:underline'>Services</a></li>
                        <li><a href='#' className='text-white hover:underline'>Projects</a></li>
                        <li><a href='#' className='text-white hover:underline'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <button onClick={toggleMenu} className='text-gray-500 focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div className='flex relative text-[#FFFF]'>
                <img src={Banner1} alt='Banner' className='w-full h-[650px]' />
                <div className='absolute top-[10rem] left-[2rem] mx-8 text-5xl'>
                    <p className='text-2xl pb-5'>Beat the heat</p>
                    <h1>Lorem Ipsum is <br />
                        Lorem Ipsum Lorem <br />
                        Lorem
                    </h1>
                </div>
                <div className='absolute top-[15rem] left-[55rem] mr-28'>
                    <div className='flex flex-row gap-3 mb-8'>
                    <button className='border rounded-2xl p-1 pl-2 pr-2'>></button>
                    <h1 className='font-semibold'>More about services</h1>
                    </div>
                    <p>is ismply dummy text of the printing and tupesettinf industry.s ismply dummy text of the printing and tupesettinf industry.Lorem s ismply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div className='text-black grid grid-cols-4 gap-9 px-16 items-center justify-between rounded absolute top-[27rem] '>
                <div className='bg-slate-100 rounded-lg pl-8 pt-12'>
                    <img src={Grid1} alt="" />
                    <h2 className='font-semibold mt-3 mb-3'>Lorem Ipsum</h2>
                    <p>It is a long establisahed fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <button className="border border-rose-400  mt-3 mb-3 rounded-2xl  px-4 py-2">Know more</button>
                </div>
                <div  className='bg-slate-100 rounded-lg pl-8 pt-12'>
                <img src={Gird2} alt="" />
                    <h2 className='font-semibold  mt-3 mb-3'>Lorem Ipsum</h2>
                    <p>It is a long establisahed fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <button className="border  mt-3 mb-3 border-red-400 rounded-2xl  px-4 py-2"> Know more</button>
                </div>
                <div  className='bg-slate-100 rrounded-lg pl-8 pt-12'>
                <img src={Grid3} alt="" />
                    <h2 className='font-semibold  mt-3 mb-3'>Lorem Ipsum</h2>
                    <p>It is a long establisahed fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <button className="border  mt-3 mb-3 border-violet-400 rounded-2xl  px-4 py-2">Know more</button>
                </div>
                <div  className='bg-slate-100 rounded-lg pl-8 pt-12'>
                <img src={Grid4} alt="" />
                    <h2 className='font-semibold  mt-3 mb-3'>Lorem Ipsum</h2>
                    <p>It is a long establisahed fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <button className="border  mt-3 mb-3 border-yellow-400 rounded-2xl  px-4 py-2">
                        <img src="" alt="" />
                        Know more</button>
                </div>
            </div>
            <div className='flex flex-row relative mt-28'>
                <img className='justify-end' src={AboutusBnner} alt="" />
                <div className='absolute top-1/3 left-14 font'>
                    <h2 className='font-semibold mb-3'>About Us</h2>
                    <h1 className='text-4xl'> It is a long establish <br /> fact that a reader  <br /> it is a long</h1>
                    <p className='text-slate-600 size-2/4 pr-[200px] mb-4 mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <button> More about company</button>
                </div>
                <div className='flex flex-row absolute gap-8 right-9 top-48 h-4/6'>
                    <img src={CamelPic} alt="" />
                    <img src={DubaiPic} alt="" />
                </div>
            </div>
            <div className='p-4'>
                <ImageSlider images={images}/>
            </div>

        </div>
    );
};

export default Home;
