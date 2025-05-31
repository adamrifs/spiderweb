import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import '../css/Home.css'

const Home = () => {
    return (
        <div className='Home-main-container'>
            <Navbar />
            <Hero/>
        </div>
    )
}

export default Home