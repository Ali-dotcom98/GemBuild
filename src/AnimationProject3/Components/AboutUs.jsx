import React, { useState, useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"
import { about } from "../assets/index"
import { keypoints, Achieve } from "./source"
import back from "../assets/background.jpg"
import Odometer from 'react-odometerjs'
import "./odometer-theme-default.css"
import { useTheme } from "../Context/ThemeContext"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const { theme } = useTheme()
  const [box1, setbox1] = useState(0)
  const [box2, setbox2] = useState(0)
  const [box3, setbox3] = useState(0)
  const box11 = useRef()

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top 40%",
        end: "bottom 60%",
      },
    }).from(".box2 > div", { y: 100, opacity: 0, duration: 1, stagger: 0.5 })
  }, [])

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setbox1(Achieve[0].Num)
      setbox2(Achieve[1].Num)
      setbox3(Achieve[2].Num)
    }, 1000)
    return () => clearTimeout(timeOutID)
  }, [])

  return (
    <section
      id="about"
      className={`section1 ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-secondary text-white"}`}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 pt-16 lg:pt-32 gap-10 lg:gap-0">
        <div className="w-full lg:w-1/3 px-2 sm:px-5">
          <img src={about} alt="" className="w-full h-full rounded-xl shadow-2xl object-cover" />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary-or font-medium text-lg sm:text-xl">About Us</h1>
            <h2 className="text-base sm:text-lg font-medium">Creating Spaces. Building Futures.</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              At GemBuild, we transform visions into reality with precision and innovation. Specializing in residential, commercial, and industrial construction, we bring years of expertise and a commitment to excellence to every project. Our team is dedicated to delivering results that inspire, function, and endure.
            </p>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-medium py-2">What we Stand For</h1>
            <div className="box2 flex flex-col gap-4">
              {keypoints.map((data, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <p className="border border-primary-or-acc font-bold w-fit rounded-full p-3 scale-75 flex justify-center items-center">
                    <Check />
                  </p>
                  <div>
                    <h1 className="font-medium text-sm sm:text-base">{data.title}</h1>
                    <p className="text-text-muted font-medium text-xs sm:text-sm">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-10 pb-16 lg:pb-20 mt-12 lg:mt-20">
        <div className="relative flex flex-col lg:flex-row font-poppins px-4 sm:px-8 lg:px-8 items-center justify-between py-8 sm:py-12 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative z-20 flex flex-col gap-2 text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-primary-or font-medium text-base sm:text-lg">Our Achievements</h1>
            <p className="text-xl sm:text-2xl font-medium">Transforming Visions Into Reality</p>
          </div>
          <div className="relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full lg:w-auto">
            {Achieve.map((data, index) => (
              <div key={index} className="flex flex-col gap-1 font-medium text-center sm:text-left">
                <h1 className="text-sm sm:text-base">{data.title}</h1>
                <p className="text-3xl sm:text-4xl py-1 flex justify-center sm:justify-start items-center gap-2">
                  <Odometer value={index === 0 ? box1 : index === 1 ? box2 : box3} format="d" className="odometer" />
                  <span>{data.sign}</span>
                </p>
                <p className="text-xs sm:text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute z-0 rounded-2xl inset-0 w-full h-full overflow-hidden">
            <img src={back} className="w-full h-full object-cover rounded-2xl" alt="" />
            <div className={`absolute inset-0 ${theme === "light" ? "bg-white/90" : "bg-dark-bg-primary/90"}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
