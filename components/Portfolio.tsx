"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Play, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define TypeScript interface for portfolio items
interface Project {
  id: string;
  title: string;
  subtitle: string;
  imgURL: string;
  description: string;
  githubLink: string;
  liveLink?: string; // Optional, as some projects may not have a live link
  tags: string[];
}

// Portfolio data with interface
const PORTFOLIO: Project[] = [
  {
    id: "001",
    title: "AgriAlertX App",
    subtitle: "Agricultural Disaster Prevention System",
    imgURL: "/images/AgriAlert.png",
    description: "Real-time agricultural risk monitoring based on weather forecasts with proactive alerts to protect crops. Uses open-source weather APIs and crop-specific threshold analysis.",
    githubLink: "https://github.com/Radwa-f/AgriAlertX",
    liveLink: "https://player.vimeo.com/video/1091302007?h=f35a0fd43d&badge=0&autopause=0&player_id=0&app_id=58479",
    tags: ["Next.js", "Java & Kotlin", "Flask", "SpringBoot", "Swift"]
  },
  {
    id: "002",
    title: "Amane",
    subtitle: "Reducing the Impact of Agriculture on Drought by Optimizing Water Use",
    imgURL: "/images/agri",
    description: "Amane leverages machine learning (ML) to enhance irrigation efficiency and optimize water resource management. By processing real-time data on environmental conditions, soil moisture, and weather patterns, the proposed ML models will predict irrigation needs, identify drought-resistant crops, and distribute water resources more effectively.",
    githubLink: "https://github.com/SOUHAIB-IA/HIDDEN-LIARS-/tree/main/HIDDEN%20LIARS/AMANE",
    liveLink: "",
    tags: ["Flask", "Next.js", "Azure", "Python", "TensorFlow", "Github Actions"]
  },
  {
    id: "003",
    title: "TradeVision",
    subtitle: "Forex Trading Platform for Profit Optimization",
    imgURL: "/images/trade_vision.png",
    description: "TradeVision is an interactive web platform for Forex trading that combines traditional algorithmic strategies with advanced artificial intelligence techniques. It enables traders of all levels to analyze the market, test strategies, and optimize their trading decisions.",
    githubLink: "https://github.com/amlmbr/platforme-traiding",
    liveLink: "",
    tags: ["Python", "TensorFlow", "DL/RL", "OpenAI Gym", "Streamlit"]
  },
  {
    id: "004",
    title: "Exam Manager",
    subtitle: "Automated Scheduling System",
    imgURL: "/images/examsmanager.png",
    description: "Automated exam scheduling and proctor assignments with workflow optimization for educational institutions.",
    githubLink: "https://github.com/Radwa-f/Gestion_De_Surveillance",
    liveLink: "https://example.com/demo",
    tags: ["SpringBoot", "Next.js", "MySql"]
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio-section" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((project, _index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)"
      }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative group">
        <div className="h-48 overflow-hidden">
          <Image
            src={project.imgURL}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-gray-700" />
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition-colors"
          >
            <Github className="w-4 h-4 text-gray-700" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
        <p className="text-sm text-blue-600 font-medium mb-2">{project.subtitle}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onSelect}
          className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Play className="w-4 h-4" />
          View Details
        </button>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div className="h-80 bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <Image
                src={project.imgURL}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-blue-600 font-medium">{project.subtitle}</p>
              </div>

              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Real-time monitoring and alert system for agricultural risks</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Automated workflows for exam scheduling and proctor assignments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Responsive design optimized for both web and mobile platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;