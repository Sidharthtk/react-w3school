import React from 'react'
import './Home.css'
import img from "../assets/lynx_in_space.webp"

function Home() {
    return (
        <div className='home1'>
            <div className='home'>
                <h1>Learn to Code</h1>
                <div>With the world's largest web developer site.</div>
                
                <input type="text" placeholder='Search our tutorials,eg.HTML' />
                <h2>Note Sure Where To Begin?</h2>

            </div>
            <div className='image'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Home