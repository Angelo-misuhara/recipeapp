import { useState } from "react"

const Navbar = () => {

  const [isShow, setShow] = useState(false);
  
  const ul=['Main', 'Japanese' ,'Protein','Pasta']
  return (
    <>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 border">
        {/* pc vview */}
  <div className=" max-w-screen-xl flex flex-wrap items-center justify-between border mx-auto p-4" id="pcvview">
    <a href="#" className="flex items-center">
        <img src='/img/icon-cooking32.png' className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="intro-logo self-center text-2xl font-bold whitespace-nowrap dark:text-white">Cooking <span className="introoo text-[#427143]">Inaaa</span></span>
          </a>
          <div>
            <ul className="flex flex-row flex-wrap gap-7">
              {ul.map((item, key) => (
                <li key={key} className=" font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#427143] md:p-0 dark:text-white md:dark:hover:text-[#c5c22a] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <a href="">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* phone view */}
        <div className=" hidden max-w-screen-xl  flex-wrap items-center justify-between mx-auto p-4" id="phoneview">
          <a href="#" className="flex items-center">
        <img src='/img/icon-cooking32.png' className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="intro-logo self-center text-2xl font-bold whitespace-nowrap dark:text-white">Cooking <span className="introoo text-[#427143]v">Inaaa</span></span>
          </a>
          <div>
          <img src={isShow ? '/img/reject32.png' : '/img/hamburger32.png'} alt="" onClick={()=> setShow(!isShow)} />
          </div>
        </div>
           {isShow &&
            <div className="hidden flex-col" id="phoneview">
           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {ul.map((item, key) => (
                <li key={key}>
                  <a href="#" className=" lista block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#427143] md:p-0 dark:text-white md:dark:hover:text-[#427143] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">{item }</a>
                </li>
            ))}
      </ul>
    </div>
          }
</nav>
    </>
  )
}
    

export default Navbar