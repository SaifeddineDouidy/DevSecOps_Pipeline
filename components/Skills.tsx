"use client";
import React, { useState } from "react";
import { motion} from "framer-motion";
import {
  Code,
  Layout,
  Smartphone,
  Server,
  Database,
  BarChart2,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "Java", "Python", "JavaScript", "Kotlin", "PHP"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200"
    },
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React", "NextJS", "Tailwind", "Redux"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Kotlin", "Flutter", "Android SDK"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-200"
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Spring Boot", ".NET", "Django", "Flask", "Node.js"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "SQL Server", "NoSQL", "MongoDB", "PostgreSQL"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      category: "Data Tools",
      icon: <BarChart2 className="w-6 h-6" />,
      skills: ["Power BI", "Talend", "SSIS", "SSRS", "SSAS"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    },
    {
      category: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      color: "from-sky-500 to-cyan-500",
      bgColor: "bg-sky-50",
      textColor: "text-sky-600",
      borderColor: "border-sky-200"
    },
   
  ];

  return (
    <section className="w-full py-20 bg-[#fdfdfd] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive showcase of my technical skills and tools I&apos;ve mastered
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              onHoverStart={() => setActiveCategory(category.category)}
              onHoverEnd={() => setActiveCategory(null)}
              className={`relative rounded-2xl overflow-hidden ${category.bgColor} border ${category.borderColor}`}
            >
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className={`ml-4 text-xl font-bold ${category.textColor}`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${category.textColor} bg-white border ${category.borderColor}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {activeCategory === category.category && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 4 }}
                  exit={{ height: 0 }}
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${category.color}`}
                />
              )}
            </motion.div>
          ))}
        </div>
          
      </div>
    </section>
  );
};

export default Skills;