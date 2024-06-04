import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
            </div>
            <p className="text-2xl mt-20">
                Hey! I'm Divyesh on this side a Senior student who is passionate about and always thriving to learn new technologies and keen towards problem solving. Currently pursuing Bachelor's degree in Computer Science and Engineering at SRM University Andhra Pradesh. I have a Strong foundation in programming languages like C/C++, Python, HTML, JAVA, JavaScript. 
            </p>
            <br />
            <p className="text-2xl">
               I enjoy Staying updated with emerging technologies especially in the feild of Artificial Intelligence and Machine Learning and struve to push past the imaginative boundaries and find creative solutions to complex and robust challenges.
               My Primary aim is to leverage my skillset in software development and contribute to innovative project.
            </p>
        </div>
    </div>
  )
}

export default About
