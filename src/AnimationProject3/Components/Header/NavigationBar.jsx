import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { navigations, socialHandles } from "../source"
import gsap from "gsap"
import { useTheme } from "../../Context/ThemeContext"
import logo from "../../Logo/favicon.ico"
import { Menu, X } from "lucide-react"

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme()
  const [fixedit, setfixedit] = useState(false)
  const [open, setOpen] = useState(false)
  const container = useRef()

  const handleControl = () => {
    const postion = window.scrollY
    if (postion > 110) setfixedit(true)
    else if (postion < 50) setfixedit(false)
  }

  useEffect(() => {
    if (fixedit) {
      gsap.fromTo(container.current, { y: -150 }, { y: 0 })
    }
  }, [fixedit])

  useEffect(() => {
    window.addEventListener("scroll", handleControl)
    return () => window.removeEventListener("scroll", handleControl)
  }, [])

  return (
    <div
      ref={container}
      className={`${fixedit ? "fixed top-0 left-0 w-full z-40" : "relative"} ${theme === "light" ? "bg-white text-black" : "bg-dark-bg-primary text-white"} font-poppins`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl">
          <img src={logo} className="size-9" />
          <h1>
            Gem<span className="bg-gradient-to-b bg-primary-or font-semibold bg-clip-text text-transparent">Build</span>
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-3">
            {socialHandles.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border p-3 rounded-full border-zinc-400 hover:text-primary-or transition"
                >
                  <Icon size={22} />
                </a>
              )
            })}
          </div>

          <div className="flex gap-6">
            {navigations.map((data, index) => (
              <Link
                key={index}
                to={data.to}
                smooth
                duration={500}
                spy
                offset={data.offset}
                activeClass="border-b-2 border-primary-or text-primary-or"
                className="cursor-pointer py-5 font-medium tracking-wider hover:text-primary-or"
              >
                {data.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" onChange={toggleTheme} />
<div className="w-11 h-6 bg-primary-or rounded-full  peer peer-checked:bg-gray-200 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
          </label>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`${theme === "light" ? "bg-white" : "bg-dark-bg-primary"} lg:hidden flex flex-col items-center gap-6 py-6`}>
          {navigations.map((data, index) => (
            <Link
              key={index}
              to={data.to}
              smooth
              duration={500}
              offset={data.offset}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-primary-or"
            >
              {data.label}
            </Link>
          ))}

          <div className="flex gap-4 pt-4">
            {socialHandles.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border p-3 rounded-full border-zinc-400 hover:text-primary-or transition"
                >
                  <Icon size={22} />
                </a>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavigationBar
