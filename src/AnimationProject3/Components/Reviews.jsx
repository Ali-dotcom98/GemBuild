import React from 'react'
import Slider from "react-slick"
import { testimonials } from "./source"
import { Star } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTheme } from "../Context/ThemeContext"

const Reviews = () => {
  const { theme } = useTheme()
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <div id="testimonials" className={`h-auto lg:h-[70vh] px-4 sm:px-8  lg:px-10  pt-24 font-poppins ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-primary text-white"}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10   sm:p-10 w-full h-full">
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <h1 className="text-primary-or font-medium text-lg sm:text-xl">Client Testimonies</h1>
          <h1 className="text-2xl sm:text-3xl font-medium">Building with Excellence</h1>
          <p className="text-sm sm:text-base leading-relaxed font-medium">
            Meet the experts who bring excellence and innovation to every project. Get to know our dedicated team making your vision a reality.
          </p>
          <button className="w-fit text-sm sm:text-lg tracking-wide flex py-2 sm:py-3 px-4 sm:px-6 rounded-md items-center gap-2 sm:gap-3 text-white bg-primary-or hover:bg-primary-or-acc hover:-translate-y-1 transition-all ease-in duration-100">
            Contact Us
          </button>
        </div>

        <div className="w-full lg:w-3/5 flex flex-col gap-4 overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((data, idx) => (
              <div key={idx} className={`mx-2 sm:mx-3 px-3 sm:px-4 py-4 sm:py-6 h-auto sm:h-[40vh] rounded-lg shadow-md ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-secondary text-white"}`}>
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <img src={data.image} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
                  <div>
                    <h1 className="font-medium text-sm sm:text-base">{data.name}</h1>
                    <div className="flex flex-row gap-1 scale-75 sm:scale-90 -translate-x-1 sm:-translate-x-4">
                      <Star className="text-primary-or" fill="#ff4400" />
                      <Star className="text-primary-or" fill="#ff4400" />
                      <Star className="text-primary-or" fill="#ff4400" />
                      <Star className="text-primary-or" fill="#ff4400" />
                      <Star className="text-primary-or" fill="#ff4400" />
                    </div>
                  </div>
                </div>
                <p className="mt-3 sm:mt-4 text-text-muted text-sm sm:text-base font-medium">{data.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Reviews
