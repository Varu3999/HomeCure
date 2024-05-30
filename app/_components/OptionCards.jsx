import React from 'react'

function OptionCards() {
  const options = [
    {
      id:1,
      title: 'Online Consultation',
      description: 'Schedule a virtual appointment with our specialists, complemented by an at-home medical expert visit for thorough examination and accurate diagnosis.',
      link: '/consultation',
      image: './onlineDocConsultation.png'
    },
    {
      id:2,
      title: 'Immediate Care',
      description: 'Have a qualified nurse visit your home for professional wound care or to administer allergy, migraine, or vaccine shots, ensuring timely and convenient treatment.',
      link: '/immediate-care',
      image: './immediateCare.jpeg'
    }
  ]
  return (    
    <div>
      <h1 className="text-4xl font-bold text-primary pt-10 pl-8 pb-5 text-center">What are you Looking for?</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 p-5">
        {options.map((option, index) => (
          <a href={option.link} className="group relative block bg-black rounded-xl">
          <img
              alt=""
              src={option.image}
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-40 rounded-xl"
          />

          <div className="relative p-5 sm:p-8 lg:p-10">
              <p className="text-2xl font-bold text-white sm:text-2xl">{option.title}</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                  <p className="text-sm text-white">
                  {option.description}
                  </p>
              </div>
              </div>
          </div>
          </a>
        ))}
      </div>
    </div>
    
  )
}

export default OptionCards