import React from "react"
import { list } from "../../data/Data"



const RecentCard = () => {
  return (
    <>
      <div className='grid3 ' >
        {list.map((val, index) => {
          const { cover, category, location, name, price, type,seater } = val
          return (
            <div className='box shadow' key={index} style={{sm:{width:"180px"}} }>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
               <p className="seater">
                 <li> {seater}
                 
                  </li>
               </p>
              </div>
              <div className='button flex' style={{sm:{width:"100px" ,display:"flex",flexDirection:"column"}  }}>
                <div>
                  <button className='btn2'>{price}/month</button> <label htmlFor=''></label>
                  <span>{type}</span>
                </div>
               
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
