// import React from 'react'

function CourseCard() {
  return (
    <div className="w-[278px] h-[360px] bg-white rounded-[20px]">
        <img src="public/Pics/01.jpg" className="w-[92%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] font-bold mr-1 relative bottom-3">آموزش  پیشرفته ری اکت</h1>
        <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden"> ک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش تلابس لابلسل نتنتس یک متن برای ازمایش یک متن برای آزمایش یک متن برای ازمایش  تلابس لابلسل نتنتس نتانتسیابس تنانست  </p>
        <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff]"><li>استاد شماره یک</li></ul>
        <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/Pics/timer.png)] bg-no-repeat bg-left [background-size:20px]">10:20:40</span>
        <span className="relative top-16 right-[120px] text-red-700">!رایگان</span>
    </div>
  )
}

export default CourseCard;