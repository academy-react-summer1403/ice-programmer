import React from 'react'

function Header() {
  return (
    <div className='border h-[120px] flex'>
        <div className='border w-1/4'> logo</div>
        <div className='border w-2/4 flex items-end justify-center gap-[15px]'>
        <a href='#' className='mb-3'>صفحه نخست</a>
        <a href='#' className='mb-3'>دوره ها</a>
        <a href='#'className='mb-3'>اساتید</a>
        <a href='#'className='mb-3'>اخبار و مقالات</a>
        <a href='#'className='mb-3'>تماس با ما</a>
        </div>
        <div className='border w-1/4'></div>
    </div>
  )
}

export default Header