
import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from '../Components/Modal'

const Filipino = () => {

  const [data, setdata] = useState([])
  const [show,setShow] = useState(false)


  const fetchData = () => {
    axios.get(`https:www.themealdb.com/api/json/v1/1/filter.php?a=filipino`)
      .then((response) => {
        setdata(response.data.meals)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(data)

  console.log(show)
  
  return (
    < >
      <div className='flex flex-col justify-center overflow-hidden p-9'>
        <h1 className=' text-5xl text-center mb-8' id='tit2tle'>Filipino Dishes</h1>
        <div className='grid grid-cols-4 grid-flow-row gap-8 overflow-hidden' id='dishes'>
          {data.map((item, key) => (
            <div key={key} className='flex flex-col justify-center border rounded-md p-9 overflow-hidden'>
              <div className=' flex justify-center'>
                <img src={item.strMealThumb} className='w-6/6 rounded-md overflow-hidden' alt="" />
              </div>
              <h1 className='font-bold text-center mt-6 mb-4'>{item.strMeal}</h1>
              <Modal idMeal={item.idMeal}/>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Filipino