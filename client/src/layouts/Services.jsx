import React from 'react'
import VerticalTabs from '../components/VerticalTabs'

const Services = () => {
  return (
    <div id='services' className='border-b-2 py-10'>
        <h2 className="text-3xl uppercase my-2">Services</h2>
        <div className='mt-10'>
            <VerticalTabs/>
        </div>
    </div>
  )
}

export default Services