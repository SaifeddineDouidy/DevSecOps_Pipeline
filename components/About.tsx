import React from 'react';

const About = () => {
  return (
    <section id="about-section" className="py-20 bg-[#fdfdfd] text-black">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        <h2 className="text-center font-bold text-lg uppercase tracking-[1rem] text-rose-600 mb-16">
          About
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
          <p className="text-center text-xl sm:text-2xl font-semibold text-gray-900">
            I&apos;m a data and AI enthusiast dedicated to turning information into innovation.
          </p>

          <p>
            Currently studying Big Data & Artificial Intelligence at ENSA El Jadida, I&apos;m passionate about building scalable systems and leveraging data to create real-world impact. My experience spans backend architecture, data pipelines, cloud services, and intelligent applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-rose-600 mb-2">📊 Data & AI</h4>
              <p className="text-sm text-gray-700">Skilled in Python, ML workflows, and BI tools like Power BI & Talend to drive insights and decisions.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-rose-600 mb-2">🧠 Projects</h4>
              <p className="text-sm text-gray-700">Built real-time agriculture alert apps, ERP modules, and scalable backend systems using Spring Boot & Django.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-rose-600 mb-2">🚀 Mindset</h4>
              <p className="text-sm text-gray-700">Curious, solution-oriented, and always learning — I believe in tech as a force for good.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
