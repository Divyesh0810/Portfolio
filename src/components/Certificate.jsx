import React, { useState } from 'react';
import sw_intern from '../assets/sw_intern.pdf';
import python from '../assets/python.pdf';
import java from '../assets/java.pdf';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      src: sw_intern,
      title: 'Software Engineering Intern',
    },
    {
      id: 2,
      src: python,
      title: 'Python',
    },
    {
      id: 3,
      src: java,
      title: 'Java',
    },
  ];

  const [expandedCertificate, setExpandedCertificate] = useState(null);

  const expandCertificate = (certificate) => {
    setExpandedCertificate(certificate);
  };

  const closeExpand = () => {
    setExpandedCertificate(null);
  };

  return (
    <div name="Certificate" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certificates</p>
          <p className="py-6">Here are some of my certificates, please click on them to view in full size.</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certificates.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
              <object data={src} type="application/pdf" width="200" height="150">
                <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
              </object>
              <h2 className="text-lg font-semibold mt-4 text-center">{title}</h2>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
                onClick={() => expandCertificate({ id, src, title })}
              >
                Expand
              </button>
            </div>
          ))}
        </div>

        {expandedCertificate && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                <div>
                  <object data={expandedCertificate.src} type="application/pdf" width="100%" height="800px">
                    <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                  </object>
                </div>
                <div className="mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeExpand}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;