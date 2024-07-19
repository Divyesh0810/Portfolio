import React from 'react';
import sentimentanalysis from "../assets/sentimentanalysis.jpeg";
import aqi from "../assets/aqi.jpeg";
import ailab from "../assets/ailab.jpeg";
import XOR from "../assets/XOR.png";
import metro from "../assets/metro.png";
import bbtcms from "../assets/bbtcms.png";

const Portfolio = () => {
  const port = [
    {
      id: 1,
      src: ailab,
      title: "AI Lab",
      href: 'https://github.com/Divyesh0810/AI-Lab.',
      description: "A collection of AI-related projects showcasing various techniques and algorithms.",
      technologies: ["Python", "TensorFlow", "Numpy", "Scikit-learn"]
    },

    {
      id: 2,
      src: aqi,
      title: "Air Quality Index",
      href: 'https://github.com/Divyesh0810/AQI-Checker',
      description: "A web application that displays the air quality index for a given location and provides health recommendations.",
      technologies: ["React", "Node.js", "Express", "Open Weather API"]
    },
    {
      id: 3,
      src: sentimentanalysis,
      title: "Sentiment Analysis",
      href: 'https://github.com/Divyesh0810/Sentiment-Analysis-of-product-based-reviews-using-transformers',
      description: "A sentiment analysis model built using transformers to classify product reviews as positive or negative.",
      technologies: ["Python", "HuggingFace Transformers", "BERT", "TensorFlow"]
    },
    {
      id: 4,
      src: XOR,
      title: "XOR Calculator",
      href: 'https://github.com/Divyesh0810/CN-Project',
      description: "A Simple GUI based JAVA project that XOR, OR and the Hamming distance Calculations on Binary Digits",
      technologies: ["JAVA", "GUI", "Binary","Computer Networks"]
    },
    {
      id: 5,
      src: metro,
      title: "Delhi metro route optimization",
      href: 'https://github.com/Divyesh0810/Delhi-Metro-Route-Optimisation',
      description: "Delhi Metro route optimization with data analysis and visualization ",
      technologies: ["Python", "Colab", "Data Analysis", "Data Visualization"]
    },
    {
      id: 6,
      src: bbtcms,
      title: "Tender Chain - BlockChain based tender contract management",
      href: 'https://github.com/JithinPonduru/TenderChain',
      description: "TenderChain A comprehensive and collaborative project based on Solidity and Sepholia Test Network  ",
      technologies: ["Web Dev", "BlockChain", "Tender Contract", "Collaboration"]
    },
  ];

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
          <p className="py-6">Here are some of my past projects, please make sure to check them out.</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
            {port.map(({ id, src, title, href, description, technologies }) => (
          
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg flex flex-col cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.open(href, '_blank')}
                >
                    <div className="flex flex-col items-center">
                      <img src={src} alt="" className="cursor-pointer rounded-md duration-500" />
                      <h2 className="text-lg font-semibold mt-4">{title}</h2>
                    </div>
                    <p className="text-center px-4 py-2">{description}</p>
                    <div className="flex flex-wrap justify-center">
                      {technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-white px-2 py-1 m-1 rounded-md">{tech}</span>
                      ))}
                    </div>
                    <div className="flex justify-center mt-auto">
                      <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                        View In Github
                      </button>
                    </div>
                </div>
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;