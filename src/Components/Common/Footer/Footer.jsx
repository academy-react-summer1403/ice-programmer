import React from 'react'

function Footer() {
  return (
    <div className='h-[412px] border border-solid bg-[#01CEC94D] [clip-path:polygon(50%_13%,65%_22%,100%_14%,100%_53%,100%_100%,0_100%,0_14%,32%_22%)]'>
      <div className='flex h-[288px] relative top-[90px]'>
        <div className='w-2/5 border[1px_solid_red] text-[12px] '>
          <p className='mr-[17%] mt-[23%] w-[74%] text-[#008D8A]'>مجموعه آموزشی فلان فعالیت خود را از سال 1390 آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است.</p>
          <p className='mr-[17%] mt-[4%] w-[74%] font-bold text-[16px] text-[#008D8A]'> ساری، جاده خزر، میدان فرح آباد، جنب مجتمع دنیای آرزو  43332000-011</p>
        </div>
        <div className='w-1/5'>
          <div className='h-1/3'><img src='../public/Pics/Logo.jpg' className='rounded-[30%] h-[100%] w-[46%] m-[auto]'></img></div>
          <div className='bg-[#008D8A] text-center rounded-[23px] mt-[35px]'><a href='' className='text-[20px] text-[white]'>info@pazhooheshgah.ir</a></div>
          <div className='flex justify-center gap-3 mt-[15%]'>
            <div className='bg-[#008D8A] w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src='../public/Pics/linkedin.png' className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-[#008D8A] w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src='../public/Pics/youtube.png' className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-[#008D8A] w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src='../public/Pics/instagram.png' className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
            <div className='bg-[#008D8A] w-[40px] h-[40px] rounded-[50%]'><a href='#'><img src='../public/Pics/telegram.png' className='w-[34px] mr-[3px] mt-[3px]'></img></a></div>
          </div>
        </div>
        <div className='w-2/5 flex items-center text-[#008D8A] text-[13px]'>
          <ul className='mr-14 list-disc mt-4 leading-7'>
            <li><a href='#'>دوره ها</a></li>
            <li><a href='#'>اخبار و مقالات</a></li>
            <li><a href='#'>پادکست ها</a></li>
            <li><a href='#'>تماس ها</a></li>
          </ul>
          <ul className='mr-12 list-disc mt-4 leading-7'>
            <li><a href='#'>اساتید برتر</a></li>
            <li><a href='#'>دسته بندی ها</a></li>
            <li><a href='#'>خدمات ما</a></li>
            <li><a href='#'>ورود به حساب</a></li>
          </ul>
          <img src='../public/Pics/samandehi.png' className='w-44 mr-5'></img>
        </div>
      </div>
      <div className='bg-[#008D8A] h-[31px] relative bottom-[-91px]'>
        <h3 className='text-[white] text-center'>کلیه حقوق این وبسایت متعلق به آموزشگاه فلان می باشد.</h3>
      </div>
    </div>
  )
}

export default Footer


// #01CEC94D