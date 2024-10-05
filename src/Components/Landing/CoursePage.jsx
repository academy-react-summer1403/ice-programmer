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
            <div className='w-[310px] h-96 mt-[19px] ml-5 rounded-[20px] bg-white'> <h1 className='p-[5px] mr-[5px] overflow-hidden'>فیلترها</h1>
                <details className="dropdown m-[0_auto] w-[95%] bg-base-100 shodow">
                    <summary className="btn m-1 cursor-pointer">قیمت</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[95%] p-2 shadow">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    </ul>
                </details>
            </div>
        </div>
            </Form>
        </Formik>
    </div>
  )
} 

export default CoursePage


// <ul className='w-[93%] m-[5px_auto]' >فیلترها
//                     <li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]">
//                         <Field type="checkbox" id="c1" name="na" className='hidden' checked />
//                         <label htmlFor="c1" className='cursor-pointer block'><span className="tip">  قیمت  </span></label>
//                         <div className="h-[auto]">
                            
//                             <Field type="radio" id="cat1" name="ca" className='hidden' />
//                             <label htmlFor="cat1" className='block'> فیلتر یک </label>
                            
//                             <Field type="radio" id="cat2" name="ca" className='hidden'/>
//                             <label htmlFor="cat2" className='block'> فیلتر دو </label>	
                        
//                             <Field type="radio" id="cat3" name="ca" checked className='hidden'/>
//                             <label htmlFor="cat3" className='block'> فیلتر سه </label>			
//                         </div>
//                     </li>
//                     <li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
//                     <li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
//                     <li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
//                 </ul>