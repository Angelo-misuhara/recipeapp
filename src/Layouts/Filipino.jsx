
import axios from 'axios'
import { useEffect, useState } from 'react'
const Filipino = () => {

   const [data,setdata] = useState([])


  const fetchData = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=filipino`)
      .then((response) => {
        setdata(response.data.meals)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data)
  
  return (
    < >
       <h1 className='text-5xl text-center'>Filipino Dishes</h1>
      <div className=" mt-9 flex flex-col justify-center overflow-hidden w-screen">
          <div className='w-screen overflow-hidden border grid grid-rows-4 grid-flow-col gap-4' id='filipinoapi'>
          {data.map((item,key) => (
            <div key={key} className='flex flex-col justify-center border overflow-hidden'>
              <img src={item.strMealThumb} className='w-2/12' alt="" />
              <h1 className='text-1xl font-semibold'>{item.strMeal}</h1>
              </div>
            ))}
          </div>
        </div>
      </>
  )
}

export default Filipino