import React from 'react'
import back from "../../assets/background.jpg"
import { footer } from "../source"
import { useTheme } from "../../Context/ThemeContext"
import logo from "../../Logo/favicon.ico"

const Footer = () => {
    const { theme } = useTheme()
    return (
        <div className={`relative w-full font-poppins ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-primary text-white"} py-16 lg:py-20`}>
            <div className='absolute w-full h-full opacity-15'>
                <img src={back} alt="" className='w-full h-full object-cover' />
            </div>

            <div className='relative z-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-24 px-4 py-8 sm:px-10 lg:px-36 lg:py-32'>
                <div className='w-full lg:w-1/5 space-y-4 text-center lg:text-left'>
                    <div className='text-2xl sm:text-3xl flex items-center justify-center lg:justify-start gap-2'>
                        <img className='w-10 h-10' src={logo} alt="" />
                        <h1>
                            Gem<span className='bg-gradient-to-b bg-primary-or font-semibold bg-clip-text text-transparent'>Build</span>
                        </h1>
                    </div>
                    <p className='text-sm sm:text-base'>
                        Our mission is to build lasting spaces that inspire and uplift, combining quality craftsmanship with innovative solutions to meet the evolving needs of our clients and communities.
                    </p>
                </div>

                <div className='w-full lg:w-4/5 mt-6 lg:mt-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {footer.map((section, idx) => (
                            <div key={idx} className='flex flex-col gap-4 text-center lg:text-left'>
                                <h1 className='text-lg sm:text-xl font-medium'>{section.title}</h1>
                                <div className='flex flex-col gap-2'>
                                    {section.routes.map((route, index) => (
                                        <div key={index} className='text-sm sm:text-base'>
                                            {route.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
