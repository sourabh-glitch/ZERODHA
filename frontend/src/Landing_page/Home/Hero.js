import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className='row text-center' >
            <img src='media/homeHero.png' alt='Hero'></img>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online plateform to invest in stock, derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary'style={{width:"20%", margin:"0 auto"}} >Signup Now</button>

        </div>
      
    </div>
  )
}

export default Hero
