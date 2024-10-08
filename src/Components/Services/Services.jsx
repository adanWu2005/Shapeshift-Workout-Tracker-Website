import React from 'react'
import './Services.css'
import Services_Data from '../../assets/serviceData'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="servicesTitle">
            <h1>My Services</h1>
        </div>
        <div className="containers">
            {Services_Data.map((service,index)=>{
                    return <div key = {index} className="format">
                        <h3>{service.s}</h3>
                        <h2>{service.name}</h2>
                        <p>{service.desc}</p>
                    </div>
                })}
        </div>
    </div>
  )
}
export default Services