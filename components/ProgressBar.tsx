"use client"
import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  title: string;
  color: string;
  progress: number; // Progress value as a percentage (0 - 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, color, progress }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && barRef.current) {
          // If the progress bar becomes visible in the viewport, set its width based on the progress prop
          barRef.current.style.width = `${progress}%`;
          // Disconnect the observer since we only need to set the progress once
          observer.disconnect();
        }
      });
    }, { threshold: 0 });

    // Start observing the progress bar element
    if (barRef.current) {
      observer.observe(barRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [progress]);

  return (
    <div className=" mt-5 flex flex-col align-items justify-center">
      <h1 className=" mt-3 bold-18 text-center">{title}</h1>
      <div className=" h-3 relative width-[400px] rounded-full bg-gray-200 overflow-hidden">
        <div ref={barRef} id="bar" className={`transition-all ease-linear duration-5000 h-full bg-${color}-400 relative`} style={{ width: '0%' }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
