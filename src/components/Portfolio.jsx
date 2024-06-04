import React from 'react';
import sentimentanalysis from "../assets/sentimentanalysis.jpeg";
import aqi from "../assets/aqi.jpeg";
import ailab from "../assets/ailab.jpeg";

const Portfolio = () => {
  const port = [
    {
      id: 1,
      src: ailab,
      href: 'https://github.com/Divyesh0810/AI-Lab.',
    },

    {
      id: 2,
      src: aqi,
      href: 'https://github.com/Divyesh0810/AQI-Checker',
    },
    {
      id: 3,
      src: sentimentanalysis,
      href: 'https://github.com/Divyesh0810/Sentiment-Analysis-of-product-based-reviews-using-transformers',
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
            {port.map(({ id, src, href }) => (
          
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                    <img src={src} alt=""  onClick={() => {console.log(href); window.open(href, '_blank');}} className=" cursor-pointer rounded-md duration-200 hover:scale-105"  style={{ margin: '0 auto', display: 'block', position: 'relative', top: '30%', transform: 'translateY(-50%)' }}/>
                        <div className="flex justify-center items-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => {console.log(href); window.open(href, '_blank');}}>
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
