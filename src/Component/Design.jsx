import React from 'react'
import  image1 from '../assets/Group.png'
import image2 from '../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'

function Design() {
  return (
    <div className='w-full h-full bg-black font-roboto'>
      <div className='flex justify-end p-8'>
        <img className='cursor-pointer' alt='close' src={image1} />
      </div>
      <div className='flex flex-col lg:[1400px] items-center justify-center text-center p-10 gap-4'>
        <p className='w-full p-4 text-white font-roboto font-extralight text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-4xl leading-normal md:leading-8 lg:leading-9 xl:leading-10'>
          Epic Games: An American video game and software developer <br /> and publisher based in Cary, North Carolina.
        </p>
        <img
          className='w-full lg:[1400px] h-auto sm:w-[600px] sm:h-[200px] md:w-[900px] md:h-[300px] lg:w-[1200px] lg:h-[400px] xl:w-[1415px] xl:h-[500px]'
          alt='noimage'
          src={image2}
        />
        <p className=' lg:w-[1230px] md:w-3/4 sm:1/2 font-normal text-lg    text-white leading-7 md:text-base lg:text-lg xl:text-xl  md:leading-7 lg:leading-8 xl:leading-9 mt-10'>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
      </div>
      <div className='flex justify-center items-center p-2 mb-4 mt-4'>
        <div className='lg:w-[416px]  h-14 bg-white flex justify-center items-center cursor-pointer'>
            <p className='text-black font-normal text-lg'>Visit Website</p>
        </div>
      </div>
      <div className='w-full  flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center  gap-10 mt-[200px]'>
      <div className='flex flex-col items-center  mb-4 lg:mb-0 md:mb-0 sm:mb-0 gap-4'>
        <img className='h-80 w-80 mb-2 cursor-pointer' alt='noimage' src={game1} />
        <p className='text-center text-white w-80'>Explore large, destructible environments where no two games are ever the same.</p>
      </div>
      <div className='flex flex-col items-center mb-4 lg:mb-0 md:mb-0 sm:mb-0 gap-4'>
        <img className='h-80 w-80 mb-2 mt-4 cursor-pointer' alt='noimage' src={game2} />
        <p className='text-center text-white w-80'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <img className='h-80 w-80 mb-2 cursor-pointer' alt='noimage' src={game3} />
        <p className='text-center text-white w-80'>Discover even more ways to play across thousands of creator-made game genres</p>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center mt-[180px] p-4'>
      <div className='w-full max-w-[1140px] h-40 flex flex-col justify-center items-center text-center gap-5'>
        <p className='text-white text-4xl'>Our Contribution</p>
        <p className='lg:w-[1100px] w-full p-2 text-white font-normal leading-7'>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
      </div>
      <div className='flex flex-col justify-between lg:flex-row text-white lg:w-[1142px] h-auto lg:h-[186px] p-2 mt-[100px]  items-center'>
  <div className='flex flex-col justify-center items-center mb-4 lg:mb-0 gap-4'>
    <p className='w-auto h-auto md:text-5xl sm:text-3xl lg:text-7xl'>5M</p>
    <p className='w-[234px] h-auto lg:text-2xl text-center'>Daily User Engagements</p>
  </div>
  <div className='flex flex-col justify-center items-center mb-4 lg:mb-0 gap-4'>
    <p className='w-auto h-auto md:text-5xl sm:text-3xl lg:text-7xl'>$500K</p>
    <p className='w-[234px] h-auto lg:text-2xl text-center'>Revenue Surge for a Platform</p>
  </div>
  <div className='flex flex-col justify-center items-center gap-4'>
    <p className='w-auto h-auto md:text-5xl sm:text-3xl lg:text-7xl'>10X</p>
    <p className='w-[234px] h-auto lg:text-2xl text-center'>ROAS on all our marketing campaigns</p>
  </div>
</div>
    </div>
    <div className=' w-full p-4 flex flex-col justify-center items-center text-center mt-[100px]'>
  <p className='text-4xl lg:text-5xl text-white mb-4 lg:mb-6'>Interested in delving deeper into the project?</p>
  <p className='w-full lg:w-[864px] max-w-full text-white text-lg lg:text-2xl mt-[50px] leading-5'>
    If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <a href="mailto:hello@abc.com" className="text-white underline">hello@abc.com</a> or give us a call at <a href="tel:+9148020802730" className="text-white underline">+91 480 20802730</a>.
  </p>
   <div className='flex lg:flex-row flex-col gap-5 mt-[50px] cursor-pointer'>
    <div className='w-[373px] h-[60px] border border-white flex items-center justify-center'>
        <p className='text-white'>Ring us on Skype</p>

    </div>
    <div className='w-[373px] h-[60px] border bg-white flex items-center justify-center'>
        <p className='text-black'>Contact Us</p>

    </div>
   </div>
</div>
<div className='flex justify-center items-center text-center p-4 mt-[150px]'>
    <p className='text-white text-center justify-center'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
</div>
    </div>
  )
}

export default Design