// import React from 'react'
// import { Field } from 'formik'

function CoursePage() {
  return (
    <div className='bg-[#a09f9f] '>
        <div className='flex flex-row-reverse flex-wrap w-[90%] mx-[auto]'>
            <div className='border-[1px_solid_red] w-[100%] flex justify-between'>
                <h1>دوره ها</h1>
                <h1> 5 دوره آموزشی</h1>
            </div>
            <div className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
                <input className='p-5 mr-[1%] bg-[url(src/assets/search.svg)] bg-no-repeat bg-left text-base font-bold [background-size:35px]' type='text' placeholder='جستجوی دوره' name='SerachCourse'  ></input>
                
                <h1 className="text-[18px] font-bold">مرتب سازی</h1>
                <a href="#">جدیدترین</a>
                <a href="#">پرفروش ترین</a>
                <a href="#">گران ترین</a>
                <a href="#">ارزان ترین</a>
            </div>
            <div className=''></div>
            <div className=''></div>
        </div>
        
    </div>
  )
}

export default CoursePage
