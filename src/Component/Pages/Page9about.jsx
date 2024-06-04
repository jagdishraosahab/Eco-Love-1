import React from 'react'
import { Link } from 'react-router-dom'


function Page9about() {
  return (
    <div className='w-full mt-28'>
        <div className='w-full lg:max-w-screen-xl mx-auto flex '>
         <div className='about px-3 lg:px-0 lg:w-[50%] h-[50vh] '>
          <h1 className='font-[newyork] text-6xl text-[#838A60]'>About Us</h1>
          <p className=' font-[poppins] lg:mr-16 mb-5 mt-5 tracking-tight text-left text-md font-bold leading-tight'> We offer an exclusive selection of products, where each products is a 
          small step toward taking care of our planet . Our store is not only 
          about goods , but about lifestyle . Together we create a positive imapct 
          on the enviroment one step at a time . 
          </p>
          <p className='font-[poppins] tracking-tight mb-5 text-md font-bold leading-tight'>
            Our products are ethically sourced and eniviromentally frinedly 
            alternative that embody the idea of sustainable living . Join us in our 
            quest to create a greener , more sustainable future with every 
            purchase
          </p>
          <a  className='font-[poppins] text-md font-bold ' href="/"> Read more</a>
         </div >
         <div className='img hidden lg:block w-[50%] h-[50vh] border-[1px] rounded-xl border-[#838A60] overflow-hidden'>
                <img className='w-full h-full object-cover ' src="https://img.freepik.com/free-photo/composition-with-minimal-tumbler-beverages_23-2149029253.jpg?t=st=1714732634~exp=1714736234~hmac=570f2e967558e8bb1a5f8b4d51b7615ec6e1842a75817b6eac2e56640ec7de38&w=360" alt="" />
         </div>
        </div>

    </div>
  )
}

export default Page9about