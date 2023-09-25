import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useModulesContext } from '../Utils/Context';
import toTitleCase from '../Utils/ToTitleCase';


export default function Module() {

  const { moduleName } = useParams();
  const { contentData } = useModulesContext();

  const[moduleData, setModuleData] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? moduleData?.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === moduleData?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePlayClick = () => {
    const audio = new Audio(moduleData[currentImageIndex]?.sound);
    audio?.play();
  };

  useEffect(() => {

    const moduleData = contentData?.filter((content) => toTitleCase(content.moduleName) === moduleName )
    setModuleData(moduleData)
  }, [contentData, moduleName])

  return (
    <div className="w-full max-w-lg mx-auto p-4 h-screen">
      <div className="relative">
        <div className="mb-6 b-s rounded-lg p-6 space-y-4">
          <img
            src={moduleData[currentImageIndex]?.image}
            alt="Main"
            className="w-full h-auto max-h-[300px]"
          />
          <h2 className="text-lg text-center font-medium" >{ moduleData[currentImageIndex]?.name }</h2>
        </div>
        <div className="flex justify-center space-x-2">
          {moduleData?.map((module, index) => (
            <img
              key={index}
              src={module?.image}
              alt={`Thumbnail ${index}`}
              className={`w-12 h-12 b-s rounded-lg p-1 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''
                }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevClick}
          className="left-chevron"
        >
        </button>
        <button 
          onClick={handlePlayClick}
          className='speaker'
        >
        </button>
        <button
          onClick={handleNextClick}
          className="right-chevron"
        >
        </button>
      </div>
    </div>
  );
}