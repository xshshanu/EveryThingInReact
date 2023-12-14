import React, { useState } from 'react'

const BgChanger = () => {

    const [bgColor, setBgColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : bgColor}}>
        <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'> 
            <div className='flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"red", color: "white"}}onClick={() => setBgColor('red')}>Red</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"green", color: "white"}} onClick={() => setBgColor('green')}>Green</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"blue", color: "white"}} onClick={() => setBgColor('blue')}>Blue</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"yellow", color: "white"}} onClick={() => setBgColor('yellow')}>Yellow</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"pink", color: "black"}} onClick={() => setBgColor('pink')}>Pink</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"purple", color: "white"}} onClick={() => setBgColor('purple')}>Purple</button>

                <button className='outline-none shadow-lg px-4 py-1 rounded-full' style={{backgroundColor :"brown", color: "white"}} onClick={() => setBgColor('brown')}>Brown</button>

            </div>
        </div>
    </div>
  )
}

export default BgChanger