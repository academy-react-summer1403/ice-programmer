// import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='border h-[120px] flex'>
        <div className='w-1/4'>
            <img src='../public/Pics/Logo.jpg' className='w-24 h-[84%] mr-[15%] mt-[10px] rounded-3xl'></img>
        </div>
        <div className='w-2/4 flex items-end justify-center gap-[15px]'>
            <a href='#' className='mb-3 hover:border-b-2 border-orange-500'>صفحه نخست</a>
            <a href='#' className='mb-3 hover:border-b-2 border-orange-500'>دوره ها</a>
            <a href='#'className='mb-3 hover:border-b-2 border-orange-500'>اساتید</a>
            <a href='#'className='mb-3 hover:border-b-2 border-orange-500'>اخبار و مقالات</a>
            <a href='#'className='mb-3 hover:border-b-2 border-orange-500'>تماس با ما</a>
        </div>
        <div className='w-1/4 flex justify-center items-end gap-5'>
            <img src='../public/Pics/Like.empty.png' className='w-6 h-6 mb-[10px]'></img>
            <a href='#' className='w-6 h-6 mb-[10px]'><img src='../public/Pics/bag.png'></img></a>
            <button className='bg-[#ff8A00] text-[11px] pl-3 pt-[5px] rounded-2xl w-28 h-8 mb-[10px]'>حساب کاربری
                <img src='../public/Pics/person.png' className='w-6 h-6 relative right-[85px] bottom-5'></img>
            </button>
        </div>
    </div>
  )
}

export default Header