import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1280px] mx-auto" id='contact'>
            <div className="my-5">
                <h2 className="text-3xl uppercase my-2 font-[500]">Contact</h2>
                <div className="my-7 flex flex-col gap-3">
                    <p>Telephone no. (044) 8120040</p>
                    <p>Mobile no. 09393629966</p>
                </div>

                <div>
                    <span className="flex items-center"><i className='bx bxs-map text-red-600 text-lg'></i> #344 Purok 5, Masagana, Pandi, Bulacan</span>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d481.9823692967226!2d120.9373682359625!3d14.88916327107395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1705633654553!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
  )
}

export default Contact