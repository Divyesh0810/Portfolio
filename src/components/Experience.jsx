import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";


const Experience = () => {
    const tech =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
            href: 'https://html.com/'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
            href:'https://web.dev/learn/css'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
            href: 'https://www.javascript.com/'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600',
            href: 'https://react.dev/'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400',
            href: 'https://tailwindcss.com/'
        },
        {
            id:6,
            src:nextjs,
            title:'NextJS',
            style:'shadow-white',
            href: 'https://nextjs.org/'
        },
        {
            id:7,
            src:node,
            title:'NodeJS',
            style:'shadow-green-400',
            href: 'https://nodejs.org/en'
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500',
            href: 'https://github.com'
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen">
      <div>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center wfull h-full text-white">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p2 inline ">Experience</p>
            <p>These are some of the technologies I am currently working with and have some knowledge in</p>
        </div>
        <div className="  w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                tech.map(({id, src, title, style, href }) =>(
                    <div key={id} className={` cursor-pointer justify-center items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} onClick={() => {console.log(href); window.open(href, '_blank');}}>
                        <img src={src} alt="" className="w-20 mx-auto cursor-pointer"  onClick={() => {console.log(href); window.open(href, '_blank');}} />
                        <p className="mt-4 text-white" onClick={() => {console.log(href); window.open(href, '_blank');}}>{title}</p>
                    </div>
                ))} 
        </div>
      </div>
    </div>
  )
}

export default Experience
