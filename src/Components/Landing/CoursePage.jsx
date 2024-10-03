// import React from 'react'
// import { Field } from 'formik'

function CoursePage() {
  return (
    <div className='bg-[#a09f9f] '>
        <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
            <div className='border-[1px_solid_red] w-[100%] flex justify-between'>
                <h1>دوره ها</h1>
                <h1> 5 دوره آموزشی</h1>
            </div>
            <div className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
                <input className='p-5 mr-[1%] bg-[url(src/assets/search.svg)] bg-no-repeat bg-left text-base font-bold [background-size:35px] shadow-inner shadow-slate-400 rounded-xl' type='text' placeholder='جستجوی دوره' name='SerachCourse'  ></input>
                
                <h1 className="text-[18px] font-bold">مرتب سازی</h1>
                <a href="#">جدیدترین</a>
                <a href="#">پرفروش ترین</a>
                <a href="#">گران ترین</a>
                <a href="#">ارزان ترین</a>
            </div>
            <div className='w-[74%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-between gap-y-24'>
                <div className="w-[278px] h-[360px] bg-white rounded-[20px]">
                    <img src="public/Pics/01.jpg" className="w-[92%] mx-auto relative bottom-6 rounded-3xl"></img>
                    <h1 className="text-[14px] font-bold mr-1 relative bottom-3">آموزش  پیشرفته ری اکت</h1>
                    <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden"> ک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش تلابس لابلسل نتنتس یک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش  تلابس لابلسل نتنتس نتانتسیابس تنانست  </p>
                    <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff]"><li>استاد شماره یک</li></ul>
                    <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/Pics/timer.png)] bg-no-repeat bg-left [background-size:20px]">10:20:40</span>
                    <span className="relative top-16 right-[120px] text-red-700">!رایگان</span>
                </div>
                <div className="w-[278px] h-[360px] bg-white rounded-[20px]">
                <img src="public/Pics/01.jpg" className="w-[92%] mx-auto relative bottom-6 rounded-3xl"></img>
                    <h1 className="text-[14px] font-bold mr-1 relative bottom-3">آموزش  پیشرفته ری اکت</h1>
                    <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden"> ک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش تلابس لابلسل نتنتس یک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش  تلابس لابلسل نتنتس نتانتسیابس تنانست  </p>
                    <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff]"><li>استاد شماره یک</li></ul>
                    <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/Pics/timer.png)] bg-no-repeat bg-left [background-size:20px]">10:20:40</span>
                    <span className="relative top-16 right-[120px] text-red-700">!رایگان</span>
                </div>
                <div className="w-[278px] h-[360px] bg-white rounded-[20px]">
                <img src="public/Pics/01.jpg" className="w-[92%] mx-auto relative bottom-6 rounded-3xl"></img>
                    <h1 className="text-[14px] font-bold mr-1 relative bottom-3">آموزش  پیشرفته ری اکت</h1>
                    <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden"> ک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش تلابس لابلسل نتنتس یک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش  تلابس لابلسل نتنتس نتانتسیابس تنانست  </p>
                    <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff]"><li>استاد شماره یک</li></ul>
                    <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/Pics/timer.png)] bg-no-repeat bg-left [background-size:20px]">10:20:40</span>
                    <span className="relative top-16 right-[120px] text-red-700">!رایگان</span>
                </div>
                <div className="w-[278px] h-[360px] bg-white rounded-[20px]">
                <img src="public/Pics/01.jpg" className="w-[92%] mx-auto relative bottom-6 rounded-3xl"></img>
                    <h1 className="text-[14px] font-bold mr-1 relative bottom-3">آموزش  پیشرفته ری اکت</h1>
                    <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden"> ک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش تلابس لابلسل نتنتس یک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش  تلابس لابلسل نتنتس نتانتسیابس تنانست  </p>
                    <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff]"><li>استاد شماره یک</li></ul>
                    <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/Pics/timer.png)] bg-no-repeat bg-left [background-size:20px]">10:20:40</span>
                    <span className="relative top-16 right-[120px] text-red-700">!رایگان</span>
                </div>
            </div>
            <div className='w-[290px] h-96 mt-[19px] ml-4 rounded-[20px] bg-white'></div>
        </div>
        
    </div>
  )
} 

export default CoursePage
