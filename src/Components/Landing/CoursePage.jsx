import {Formik, Field, Form} from 'formik';
import CourseCard from './CourseCard';
import LinkComponent from './LinkComponent';

function CoursePage() {
  return (
    <div className='bg-[#a09f9f] '>
        <Formik>
            <Form>
            <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
            <div className='border-[1px_solid_red] w-[100%] flex justify-between'>
                <h1>دوره ها</h1>
                <h1> 5 دوره آموزشی</h1>
            </div>
            <div className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
                <Field className='p-5 mr-[1%] bg-[url(src/assets/search.svg)] bg-no-repeat bg-left text-base font-bold [background-size:35px] shadow-inner shadow-slate-400 rounded-xl' type='text' placeholder='جستجوی دوره' name='SerachCourse'  ></Field>
                
                <h1 className="text-[18px] font-bold">مرتب سازی</h1>
                <LinkComponent id={'LastProduct'} topic={'جدیدترین'} />
                <LinkComponent id={'BestSelling'} topic={'پرفروش ترین'} />
                <LinkComponent id={'Expensive'} topic={'گران ترین'} />
                <LinkComponent id={'Cheap'} topic={'ارزان ترین'} />
            </div>
            <div className='w-[74%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-between gap-y-24'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />                
            </div>
            <div className='w-[310px] h-96 mt-[19px] ml-5 rounded-[20px] bg-white'>
                <ul className='w-[93%] m-[5px_auto]' >فیلترها
                    <li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
                    <li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
                    <li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
                    <li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
                </ul>
            </div>
        </div>
            </Form>
        </Formik>
    </div>
  )
} 

export default CoursePage
