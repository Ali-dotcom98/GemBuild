import React from 'react'
import back from "../assets/header-background.jpg"
import hero from "../assets/hero.png"
import { whyChooseUs } from "./source"
import { useTheme } from "../Context/ThemeContext"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Home = () => {
  const { theme } = useTheme()

  useGSAP(() => {
    const tl = gsap.timeline({ ease: "power3.out" })
    tl.from(".head", { y: -100, opacity: 0, duration: 1 })
      .from(".para", { y: -50, opacity: 0, duration: 1 }, "-=0.2")
      .from(".Icons div", { x: -20, opacity: 0, stagger: 0.2 }, "-=0.5")
      .from(".box", { y: 100, opacity: 0 }, "-=0.5")
      .from(".box div", { y: 100, opacity: 0, stagger: 0.2, duration: 1 })
  }, [])

  return (
    <div
      id="header"
      className={`min-h-screen overflow-hidden relative px-5 lg:px-10 font-poppins ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-primary text-white"}`}
    >
      <div className="absolute inset-0 z-0">
        <img src={back} className="w-full h-full object-cover" alt="background" />
        <div className={`absolute inset-0 ${theme === "light" ? "bg-white/90" : "bg-dark-bg-primary/90"}`} />
      </div>

      <div className="absolute z-40 right-10 -top-40 rounded-full blur-3xl size-36 bg-primary-or" />

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 lg:pt-12 gap-10 relative z-10">
        <div className="flex flex-col gap-5">
          <h1 className="head text-3xl lg:text-5xl tracking-wide font-bold">
            Constructing Everything You Need
          </h1>

          <p className="para tracking-wide leading-relaxed text-base lg:text-lg">
            We deliver complete construction solutions, ensuring quality and reliability from start to finish.
          </p>

          <div className="Icons flex gap-2 scale-90 lg:scale-75 lg:-translate-x-20">
            <div className="border p-3 rounded-full border-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </div>
            <div className="border p-3 rounded-full border-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <div className="border p-3 rounded-full border-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="border p-3 rounded-full border-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </div>
          </div>

          <button className="w-fit flex p-3 rounded-md items-center gap-3 text-white bg-primary-or hover:bg-primary-or-acc hover:-translate-y-1 transition-all duration-100">
            Get a quote
          </button>
        </div>

        <div className="flex justify-center items-center -translate-y-10 md:translate-y-0">
          <img
            src={hero}
            className="w-72 sm:w-80 lg:size-96 lg:scale-110 lg:-translate-y-10"
            alt="hero"
          />
        </div>
      </div>

      <div
        className={`box ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-secondary text-white -translate-y-5"} 
        mt-14 lg:-translate-y-24 relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6 rounded-xl shadow-2xl`}
      >
        {whyChooseUs.map((data, index) => {
          const Icon = data.icon
          return (
            <div key={index} className="flex flex-col items-center gap-2 text-center">
              <Icon className="text-2xl text-primary-or-acc" />
              <h1 className="font-medium">{data.title}</h1>
              <p className="text-text-muted text-sm">{data.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
