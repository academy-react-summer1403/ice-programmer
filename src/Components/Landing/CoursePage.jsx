import {Formik, Field, Form} from 'formik';
import CourseCard from './CourseCard';
// import './accardion.css';
import { useState } from 'react';

const CoursePage=()=> {


    const[Course, setCourse]=useState([
        {image:'public/Pics/person.png', topic:'آموزش ری اکت 1', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد یک',time:'12:12:12', price:'رایگان!'},
        {image:'public/Pics/person.png',topic:'آموزش ری اکت 2', explain:'آموزش می دهیم. آموزش می دهیم', teacher:'استاد دو',time:'12:12:12', price:'رایگان!'},
        {image:'public/Pics/person.png',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'}
    ])

  return (
    <div className='bg-[#a09f9f] '>

            <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
            <div className='border-[1px_solid_red] w-[100%] flex justify-between'>
                <h1>دوره ها</h1>
                <h1> 5 دوره آموزشی</h1>
            </div>
            <div className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
                <Formik initialValues={{SearchCourse:'', New:'',BestSelling:'',Expensive:'',Cheap:'' , sort:null }}>
                    <Form  className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
                
                        <Field className='p-5 mr-[1%] bg-[url(src/assets/search.svg)] bg-no-repeat bg-left text-base font-bold [background-size:35px] shadow-inner shadow-slate-400 rounded-xl' type='text' placeholder='جستجوی دوره' name='SearchCourse'  />
                        <h1 className='font-bold pr-2'>مرتب سازی</h1>

                        <Field className='hidden' type='radio'  name='New'  />
                        <label htmlFor='#' className='cursor-pointer pr-4 checked:[text-[red] font-bold]'>جدیدترین</label>

                        <Field className='hidden' type='radio'  name='BestSelling'  />
                        <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>پرفروش ترین</label>

                        <Field className='hidden' type='radio'  name='Expensive'  />
                        <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>گران ترین</label>

                        <Field className='hidden' type='radio'  name='Cheap'  />
                        <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>ارزان ترین</label>
                        

                        <button type='submit' className='bg-slate-400 p-3 rounded-xl'>جستجو کن</button>
                    </Form>
                </Formik>
            </div>

            <div className='w-[74%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-between gap-y-24'>
                {Course.map((item, index)=>{
                    return(
                        <CourseCard 
                        key={index}
                        image={item.image}
                        topic={item.topic} 
                        explain={item.explain} 
                        teacher={item.teacher} 
                        time={item.time} 
                        price={item.price} />  
                    );   
                })}             
            </div>

            <div className='w-[310px] h-96 mt-[19px] ml-5 rounded-[20px] bg-white'> 
            {/* <Formik>
                <Form>
                <ul id="accardion" className="duration-500 p-[5px] pb-[20px] list-none text-[17px]">
                    <li className=' relative rounded-[5px] m-[15px_0]'>
                        <input type="checkbox" id="c0" name="na"  checked/>
                        <label htmlFor="c0" className='inline-block'>  <span className="tip"> قیمت </span></label>
                        <div className="content">

                            <output id="priFromOut">0</output>
                            <span> از : </span>
                            <input type="range" id="priFrom" min="0" max="1000000" step="10000" value="0"/>
                            <output id="priToOut">1000000</output>
                            <span> تا : </span>
                            <input type="range" id="priTo" min="0" max="1000000" step="10000" value="1000000"/>
                        
                        </div>

                    </li>
                    <li className='relative rounded-[5px] m-[15px_0]'>
                        <input type="checkbox" id="c1" name="na"/>
                        <label htmlFor="c1" className='inline-block'><span className="tip">  دسته بندی </span></label>
                        <div className="content">
                            
                            <input type="radio" id="cat1" name="ca"/>
                            <label htmlFor="cat1"> آرایشی </label>
                            
                            <input type="radio" id="cat2" name="ca"/>
                            <label htmlFor="cat2"> بهداشتی </label>	

                            <input type="radio" id="cat3" name="ca" checked/>
                            <label htmlFor="cat3"> همه </label>				
                        </div>

                    </li> 
                    <li className='relative rounded-[5px] m-[15px_0]'>
                        <input type="checkbox" id="ch5" name="na" />
                        <label htmlFor="ch5" className='inline-block'><span className="tip"> موجودی </span> </label>
                        <div className="content">
                            <input type="radio" id="exi1" name="ex"/>
                            <label htmlFor="exi1">  موجود  </label>	

                            <input type="radio" id="exi2" name="ex" checked/>
                            <label htmlFor="exi2"> همه </label>	
                        </div>

                    </li>
                </ul>
                </Form>
                </Formik> */}
            </div>
        </div>

    </div>
  )
} 

export {CoursePage};





/* <ul className='w-[93%] m-[5px_auto]' >فیلترها
<li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]">
    
    <Field type="checkbox" id="c1" name="na" className='hidden' checked />
    <label htmlFor="c1"  className='cursor-pointer block'><span className="tip">استاد  </span></label>
    <div className="h-[auto]">                          
        <Field type="radio" id="cat1" name="ca" className='hidden' />
        <label htmlFor="cat1" className='block'> فیلتر یک </label>
        
        <Field type="radio" id="cat2" name="ca" className='hidden'/>
        <label htmlFor="cat2" className='block'> فیلتر دو </label>	
    
        <Field type="radio" id="cat3" name="ca" checked className='hidden'/>
        <label htmlFor="cat3" className='block'> فیلتر سه </label>			
    </div>
</li>
<li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
<li className="mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
<li className=" mt-3 border border-[#ddd] p-5 rounded-[13px]"></li>
</ul> */