import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div
          key={index}
          className={` items-center cursor-pointer  p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"> ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="accordion-title flex items-center justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <span className={activeIndex === index ? "text-sky-600" : ""}>{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transform ${
                activeIndex === index ? 'rotate-180 text-sky-600' : ''
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className=" text-sm">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
