import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen bg-zinc-900 text-white font-semibold flex flex-col justify-center items-center'>
      <h1 className='text-5xl tracking-tighter text-center bg-gradient-to-b from-white to-oklch(70.4% 0.04 256.788) bg-clip-text text-transparent'>
        Unleash the Power !
        <br />
        <span>Redemption time</span>
      </h1>

      <p className="mt-6 text-center max-w-xl text-[oklch(44.6%_0.043_257.281)] selection:text-yellow-100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias vitae animi rem ipsam inventore dicta est odio minus dignissimos!
      </p>

      <div className="mt-7 flex items-center gap-4">
        <input
          type="text"
          className="bg-zinc-800 rounded-lg h-9 px-4 border text-center w-72"
          placeholder="Enter your email"
        />
        <button className="border rounded px-6 py-2 text-white font-semibold transition-colors duration-200 bg-gradient-to-b from-transparent to-sky-500">
          Get Your Gear Now
        </button>
      </div>
    </div>
  )
}

export default Hero
