import React from 'react'
import VerticalTabs from '../components/VerticalTabs'

const Services = () => {
  return (
    <div id='services' className='border-b-2 py-10'>
        <h2 className="text-3xl uppercase my-2 font-[500]"> Our Services</h2>
        <p>
        we specialize in delivering high-quality printing solutions tailored to meet your unique needs. From eye-catching Tshirt printing, full sublimation jersey's, invitational cards and brochures to stunning banners and promotional materials, we bring your vision to life with precision and creativity.
        </p>
        <div className='mt-10'>
            <VerticalTabs/>
        </div>
    </div>
  )
}

export default Services