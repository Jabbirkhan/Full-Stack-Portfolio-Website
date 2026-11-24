import React from 'react'
import { assets } from '../assets/assets.js'; 

const Hero = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="relative rounded-xl overflow-hidden">
                <img src={assets.theme2} alt="Hero Background" className="w-full h-64 md:h-96 object-cover" />
                <div className="absolute inset-0 max-w-6xl bg-black bg-opacity-40 flex flex-col items-center justify-center py-4 px-4">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                        Crafting Seamless Digital Experiences
                    </h1>
                    <p className="mt-2 max-w-full text-sm md:text-base">
                        I'm a MERN stack developer passionate about building robust and scalable web applications.
                        Let's bring your ideas to life.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
